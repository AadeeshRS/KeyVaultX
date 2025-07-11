from PIL import Image, ImageOps

# Open the favicon
img = Image.open('favicon.png').convert('RGBA')

# Split into RGB and Alpha
r, g, b, a = img.split()
# Merge RGB and invert
rgb_image = Image.merge('RGB', (r, g, b))
inverted_rgb = ImageOps.invert(rgb_image)
# Recombine with original alpha
inverted_img = Image.merge('RGBA', (*inverted_rgb.split(), a))

# Save the inverted favicon
inverted_img.save('favicon.png')
