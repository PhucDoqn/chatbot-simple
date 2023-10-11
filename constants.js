// Options the user could type in
const prompts = [
  ["xin chào", "hey", "hello", "chào", "hi", "chào bạn", "chào buổi sáng"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order

const replies = [
  ["xin chào", "chào bạn", "chào buổi sáng","Rất vui gặp bạn", "Tôi giúp gì được cho bạn", "Bạn gọi tôi à", "Có tôi đây", "Vâng, tôi sẵn sàng nghe"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Sao cơ",
  "Bạn hỏi lại xem nào",
  "Alo, lại đi",
  "Hừm, bạn thử câu hỏi khác xem",
  "Hừm, có vẻ hơi khó với tôi",
  "Xin lỗi, tôi chưa có thông tin về câu hỏi này"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]