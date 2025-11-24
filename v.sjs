const Speaker = require('speaker');
const reader = require("readline-sync");

// Create the Speaker instance
const speaker = new Speaker({
  channels: 2,          // 2 channels
  bitDepth: 16,         // 16-bit samples
  sampleRate: 8000     // 44,100 Hz sample rate
});

// PCM data from stdin gets piped into the speaker
for(;;) {
	let data = reader.question("> ");
	if (data[0] == '!')
		speaker.write(Buffer.from(data, "ascii"));
	else 
		speaker.write(data);
}
