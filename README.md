Etch-a-Sketch Grid

A dynamic, interactive drawing grid built using HTML, CSS (Flexbox), and JavaScript. Users can draw by hovering over squares, customize grid size, and experience progressive color effects.

🚀 Features
🧱 Dynamic Grid Generation
Default 16 × 16 grid
Generates squares using JavaScript (no manual HTML)
🎯 Hover Drawing Effect
Hover over squares to draw like a pixelated pen
🎨 Random Colors
Each square gets a random RGB color on first interaction
🌑 Progressive Darkening
Each hover increases color intensity by 10%
Fully colored after 10 interactions
🔄 Resizable Grid
Button allows user to input grid size
Supports up to 100 × 100
Maintains fixed container size
🛠️ Technologies Used
HTML
CSS (Flexbox)
JavaScript (DOM Manipulation & Events)
📦 How It Works
1. Grid Creation
Squares are created dynamically using a loop
Total squares = size × size
Each square adjusts size based on container width
2. Hover Interaction
mouseover event applied to each square
On first hover:
Random RGB color is assigned
On subsequent hovers:
Color darkens gradually using RGBA
3. Grid Resize
Button triggers a prompt()
User enters grid size (1–100)
Old grid is cleared and new grid is generated
📐 Layout Details
Container uses Flexbox
flex-wrap: wrap creates grid rows
Square size is calculated dynamically:
square size = container width / number of squares per side
⚠️ Input Constraints
Minimum: 1
Maximum: 100
Prevents performance issues with large grids
🧠 Key Concepts Learned
DOM manipulation
Event listeners (mouseover, click)
Dynamic styling with JavaScript
Flexbox layout system
Data persistence using dataset
RGB vs RGBA color handling
📸 Preview

A pixel-style drawing board where colors build up with interaction.
<img width="1104" height="521" alt="image" src="https://github.com/user-attachments/assets/7546ca00-c91e-473b-a400-bf777dd4c855" />

📌 Future Improvements
Click-and-drag drawing (only draw when mouse is pressed)
Reset/clear button
Darkening toward black instead of opacity
Mobile touch support
CSS Grid version (advanced)
📝 Commit Highlights
Initialize 16×16 grid with Flexbox
Add hover drawing effect
Implement dynamic grid resizing
Add random color generation
Implement progressive darkening effect
Fix opacity issue using RGBA
📄 License

This project is for learning purposes and part of a frontend development practice.
