// $lib/typeWriter.ts
export function startTypewriter(
  fullText: string,
  onUpdate: (text: string) => void,
  speed: number = 100,
  resetDelay: number = 5000
) {
  let currentIndex = 0;

  function typeNextChar() {
    if (currentIndex < fullText.length) {
      const displayedText = fullText.slice(0, currentIndex + 1);
      onUpdate(displayedText);
      currentIndex++;
      
      setTimeout(typeNextChar, speed);
    } else {
      // Reset efter delay
      setTimeout(() => {
        onUpdate(''); // Clear teksten
        currentIndex = 0;
        setTimeout(typeNextChar, 200); // Lille pause før restart
      }, resetDelay);
    }
  }

  // Start typewriter
  onUpdate('dotenv-diff');
  typeNextChar();
}