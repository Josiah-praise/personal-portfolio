# Project Thumbnails

## Required Images

Please add the following project thumbnail images to this directory:

### Image Specifications:
- **Format:** WebP (recommended) or PNG/JPG
- **Aspect Ratio:** 16:9 (e.g., 800x450px or 1200x675px)
- **File Size:** < 200KB each (optimize for web)
- **Naming Convention:** `project-slug-thumbnail.webp`

### Required Files:
1. `ecommerce-thumbnail.webp` - E-commerce Platform screenshot
2. `task-manager-thumbnail.webp` - Task Management System screenshot
3. `weather-thumbnail.webp` - Weather Dashboard screenshot
4. `cms-thumbnail.webp` - Portfolio CMS screenshot
5. `fitness-thumbnail.webp` - Fitness Tracker screenshot

### Creating Placeholder Images:

If you don't have actual project screenshots yet, you can create placeholders using:

**Online Tools:**
- https://placehold.co/800x450/png - Simple placeholder generator
- https://placeholder.com/ - Customizable placeholders
- Figma/Canva - Design custom project mockups

**Using ImageMagick (Linux):**
```bash
convert -size 800x450 xc:#3b82f6 -pointsize 48 -fill white -gravity center \
  -annotate +0+0 "Project Name" project-name-thumbnail.png
```

**Using Online Screenshot Tools:**
- Take screenshots of your deployed projects
- Use browser dev tools to capture responsive views
- Optimize with tinypng.com or squoosh.app

### Optimization Tools:
- **Squoosh:** https://squoosh.app/
- **TinyPNG:** https://tinypng.com/
- **ImageOptim (Mac):** https://imageoptim.com/

### Note:
The ProjectCard component is already configured to use these images. Once you add them here, they will automatically display in the projects grid.
