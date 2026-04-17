🎨 Etch-a-Sketch Grid

An interactive browser-based drawing grid built with HTML, CSS (Flexbox), and JavaScript.
Draw by hovering over squares, customize grid size, and watch colors build progressively.

🚀 Features
🧱 Dynamic Grid Generation
Default 16 × 16 grid, generated entirely with JavaScript
🎯 Hover Drawing
Draw by moving your cursor across the grid
🎨 Random Colors
Each square gets a unique RGB color on first interaction
🌑 Progressive Darkening
Each hover increases opacity by 10% until fully visible
🔄 Resizable Grid
User-defined grid size up to 100 × 100
🛠️ Built With
HTML
CSS (Flexbox)
JavaScript (DOM & Events)
📦 How It Works
Grid Creation
Squares are generated dynamically using JavaScript
Total squares = size × size
Each square scales based on container width
Hover Interaction
Uses mouseover event
First hover assigns a random color
Repeated hovers increase opacity using rgba()
Resize Functionality
Button triggers user input via prompt()
Grid updates instantly based on new size
📐 Layout
Flexbox-based grid system
flex-wrap: wrap handles row structure
Fixed container size with responsive square scaling
⚠️ Constraints
Minimum grid size: 1
Maximum grid size: 100
Prevents performance issues on large grids
🧠 Concepts Practiced
DOM manipulation
Event handling (mouseover, click)
Dynamic styling
Flexbox layout
Data handling using dataset
RGB vs RGBA color logic
📸 Preview
/home/msaimnaveed/repos/Etch-a-Sketch/Final_image.png
📌 Future Improvements
Click-and-drag drawing
Reset / clear button
Darkening toward black instead of opacity
Mobile touch support
CSS Grid implementation
📝 Commit Highlights
Initialize 16×16 grid
Add hover drawing effect
Implement grid resizing
Add random color logic
Implement progressive darkening
Fix opacity handling with RGBA
📄 License

This project is for learning purposes and frontend practice.