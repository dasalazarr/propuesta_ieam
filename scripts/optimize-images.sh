#!/bin/bash

# IEAM Image Optimization Script for Social Previews
# Targets images in public/images/ that exceed 300KB

echo "🔍 Checking for large images in public/images/..."

find public/images -maxdepth 1 -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read file; do
    # Get size in KB
    size=$(du -k "$file" | cut -f1)
    if [ "$size" -gt 300 ]; then
        extension="${file##*.}"
        basename="${file%.*}"
        
        # Check if we are running on macOS (sips) or Linux (convert/magick)
        if command -v sips &> /dev/null; then
            echo "Optimizing $file ($size KB) with sips..."
            sips -s format jpeg -s formatOptions 70 "$file" --out "${basename}.jpg" > /dev/null
        elif command -v magick &> /dev/null; then
            echo "Optimizing $file ($size KB) with magick..."
            magick "$file" -quality 70 "${basename}.jpg"
        elif command -v convert &> /dev/null; then
            echo "Optimizing $file ($size KB) with convert..."
            convert "$file" -quality 70 "${basename}.jpg"
        else
            echo "❌ Error: Neither sips, magick nor convert found. Please install ImageMagick."
            exit 1
        fi
        
        new_size=$(du -k "${basename}.jpg" | cut -f1)
        echo "✅ Created ${basename}.jpg ($new_size KB)"
    fi
done

echo "✨ Optimization complete. Remember to update your .ts data files if extensions changed from .png to .jpg"
