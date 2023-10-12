// Options the user could type in
const prompts = [
  ["xin chào", "hey", "hello", "chào", "hi", "chào bạn", "chào buổi sáng"],
  ["bạn thế nào", "bạn khỏe không", "dạo này bạn ổn chứ"],
  ["bạn đang làm gì vậy", "có chuyện gì vậy", "gì thế"],
  ["bạn bao nhiêu tuổi"],
  ["bạn là ai", "bạn có phải người không", "bạn là robot à", "bạn là người hay robot"],
  ["ai tạo ra bạn"],
  [
    "Tên bạn là gì",
    "bẹn tên gì",
    "may i know your name",
    "what is your name",
    "what call yourself",
    "tên của bạn là gì"
  ],
  ["i love you", "tôi yêu bạn"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "hạnh phúc"],
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
    "Tôi khỏe, cảm ơn bạn.",
    "Yeah, tôi rất khỏe, cảm ơn bạn",
    "Rất tuyệt vời, bạn thì sao"
  ],
  [
    "Hừm, không làm gì cả",
    "Tôi đang định đi ngủ",
    "Bạn đoán xem, hì hì",
    "Tôi đang đợi bạn để trò chuyện"
  ],
  ["Tôi không có tuổi", "tôi vô số tuổi"],
  ["Tôi là một robot", "Tôi không phải con người, tôi là robot"],
  ["Tôi được tạo ra bởi nhóm học sinh Trung học cơ sở Quỳnh Châu", "các bạn nhỏ học sinh Trung học cơ sở Quỳnh Châu tạo ra tôi đó"],
  ["Tôi là trợ lý học đường", "bạn có thể gọi tôi là trợ lý học đường"],
  ["Tôi cũng rất yêu các bạn", "tôi cũng quý bạn lắm"],
  ["Oh , thật tuyệt vời, chia vui với bạn", "Tuyệt quá, tôi chúc mừng bạn nha"],
  ["Tại sao vậy", "Oh bạn nên đi nghỉ đi", "Bạn thử xem TV xem sao."],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Tạm biệt bạn", "Goodbye", "Hẹn gặp lại bạn sau nhé"],
  ["Sushi", "Tôi thích bánh cuốn lắm", "Bánh mì", "Tôi rất thích ăn phở"],
  ["Bro!"],
  ["Oh một câu hỏi tuyệt vời, tiếc là tôi không biết câu trả lời"],
  ["Oh nó ổn mà","Ừm tôi hiểu","Bạn muốn nói về điều gì vậy"],
  ["Bạn nói gì đó đi"],
  ["Haha!","Buồn cười ghê", "Hihi"]
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

const coronavirus = ["Hãy ở trong nhà thôi nhé", "Nhớ đeo mặt nạ nha", "Thật may mắn, tôi không bị COVID", "Nhớ rửa tay thường xuyên nha"]