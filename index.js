require("dotenv").config(); // Load environment variables

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/webhook", (req, res) => {
  const msg = req.body.Body?.toLowerCase();

  let reply = "";

  switch (msg) {
    case "hi":
    case "hello":
      reply = `👋 Welcome to Rahul's Bot!\nChoose:\n1. Services\n2. About\n3. Contact`;
      break;

    case "1":
    case "services":
      reply = `🛠️ Our Services:\n- Web Development\n- AI Bots\nType 'menu' to go back.`;
      break;

    case "2":
    case "about":
      reply = `🙋‍♂️ About Us:\nWe create smart apps for startups.\nType 'menu' to go back.`;
      break;

    case "3":
    case "contact":
      reply = `📞 Contact:\nEmail: rahul@example.com\nPhone: +91-90000-00000\nType 'menu' to go back.`;
      break;

    case "menu":
      reply = `📋 Main Menu:\n1. Services\n2. About\n3. Contact`;
      break;

    default:
      reply = `❓ Sorry, I didn't understand.\nType 'menu' to see options.`;
  }

  res.set("Content-Type", "text/xml");
  res.send(`<Response><Message>${reply}</Message></Response>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Bot server running at http://localhost:${PORT}`);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Bot server running at http://localhost:${PORT}`);
});
