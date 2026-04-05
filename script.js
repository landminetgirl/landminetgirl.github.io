const container = document.getElementById("ascii-container");

function generate() {
    console.log('running!')
  const text = document.getElementById("textInput").value || "ASCII";

  container.innerHTML = "";

  const chars = text.split("");

  const spacing = 20;
  const startX = window.innerWidth / 2 - (chars.length * spacing) / 2;
  const startY = window.innerHeight / 2;

  chars.forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char;

    const x = startX + i * spacing;
    const y = startY;

    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    // random float offsets
    const offsetX = (Math.random() - 0.5) * 100 + "px";
    const offsetY = (Math.random() - 0.5) * 100 + "px";

    span.style.setProperty("--x", offsetX);
    span.style.setProperty("--y", offsetY);

    // random animation timing
    span.style.animationDuration = (4 + Math.random() * 4) + "s";
    span.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(span);
  });
}

// initial render
generate();