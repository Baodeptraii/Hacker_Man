const lessons = [
    { id: 0, title: "Lỗ hổng 0: Giới thiệu", description: "Đọc cái này để biết mấy cái ở dưới là gì ;) " },
    { id: 1, title: "Lỗ hổng 1: SQL Injection (SQLi)", description: "Nếu bạn bị tấn công SQL Injection, Hacker có thể chạy các truy vấn tùy ý trên cơ sở dữ liệu của bạn." },
    { id: 2, title: "Lỗ hổng 2: Cross-Site Scripting (XSS)", description: "Nếu trang web của bạn cho phép người dùng tự thêm nội dung, hãy cần chắc chắn rằng Hacker không thể chèn các đoạn mã JavaScript độc hại vào đó." },
    { id: 3, title: "Lỗ hổng 3: Command Execution", description: "Nếu ứng dụng của bạn gọi đến hệ điều hành, bạn cần đảm bảo chuỗi lệnh được xây dựng một cách an toàn." },
    { id: 4, title: "Lỗ hổng 4: Clickjacking", description: "Bạn cần chắc chắn rằng thông tin nhấp chuột của người dùng không bị Hacker đánh cắp." },
    { id: 5, title: "Lỗ hổng 5: Cross-Site Request Forgery (CSRF)", description: "Nếu Hacker tạo ra các yêu cầu HTTP giả mạo đến trang web của bạn, chúng có thể khiến người dùng thực hiện những hành động không mong muốn." },
    { id: 6, title: "Lỗ hổng 6: Directory Traversal", description: "Đảm bảo rằng đường dẫn tệp hoặc URL được xử lý một cách cẩn thận để ngăn chặn việc Hacker lạm dụng và tấn công hệ thống, các file nhạy cảm của bạn." },
    { id: 7, title: "Lỗ hổng 7: Reflected XSS", description: "Khi xây dựng một trang web, bạn cần chắc chắn rằng mình không vô tình tạo ra một kênh cho phép mã JavaScript độc hại trả về máy chủ của bạn." },
    { id: 8, title: "Lỗ hổng 8: DOM-based XSS", description: "Nếu bạn sử dụng các đoạn URI trong trang web của mình, bạn cần đảm bảo chúng không thể bị lạm dụng để đưa mã JavaScript độc hại vào." },
    { id: 9, title: "Lỗ hổng 9: File Upload Vulnerabilities", description: "Tải tệp lên là cách dễ dàng để Hacker đưa mã độc vào ứng dụng của bạn." },
    { id: 10, title: "Lỗ hổng 10: Broken Access Control", description: "Tất cả tài nguyên trên trang web của bạn cần phải có chức năng kiểm soát quyền truy cập, ngay cả khi chúng không được thiết kế cho người dùng sử dụng." },
    { id: 11, title: "Lỗ hổng 11: Open Redirects", description: "Nếu ứng dụng web của bạn tự động chuyển hướng người dùng đến các URL được cung cấp trong chuỗi truy vấn, bạn có thể vô tình tạo ra lỗ hổng bảo mật cho phép Hacker thực hiện các cuộc tấn công lừa đảo." },
    { id: 12, title: "Lỗ hổng 12: Unencrypted Communication", description: "Mã hóa không đủ mạnh có thể khiến bạn dễ bị tấn công." },
    { id: 13, title: "Lỗ hổng 13: User Enumeration", description: "Việc rò rỉ thông tin tên người dùng trên trang web của bạn sẽ giúp Hacker dễ dàng tấn công hơn." },
    { id: 14, title: "Lỗ hổng 14: Information Leakage", description: "Rỏ rỉ thông tin hệ thống sẽ giúp Hacker hiểu về hệ thống công nghệ của bạn." },
    { id: 15, title: "Lỗ hổng 15: Password Mismanagement", description: "Việc sử dụng mật khẩu an toàn là điều cần thiết đối với một hệ thống xác thực, tuy nhiên nhiều trang web lại quên mất điều này." },
    { id: 16, title: "Lỗ hổng 16: Privilege Escalation", description: "Việc leo thang đặc quyền xảy ra khi Hacker khai thác lỗ hổng để mạo danh người dùng khác hoặc giành thêm quyền truy nhập." },
    { id: 17, title: "Lỗ hổng 17: Session Fixation", description: "Việc xử lý ID phiên không an toàn có thể khiến người dùng của bạn dễ bị chiếm đoạt phiên." },
    { id: 18, title: "Lỗ hổng 18: Weak Session IDs", description: "ID phiên quá dễ đoán có thể khiến trang web của bạn bị tấn công chiếm quyền điều khiển phiên." },
    { id: 19, title: "Lỗ hổng 19: XML Bombs", description: "Việc xử lý macro XML không an toàn có thể khiến máy chủ của bạn dễ bị tấn công từ các tệp XML được thiết kế đặc biệt." },
    { id: 20, title: "Lỗ hổng 20: XML External Entities", description: "Việc xử lý không an toàn các tham chiếu bên ngoài XML cho phép Hacker thăm dò hệ thống tệp của bạn để tìm thông tin nhạy cảm." },
    { id: 21, title: "Lỗ hổng 21: Denial of Service Attacks", description: "Đôi khi Hacker không cần phải hack trang web của bạn, chúng chỉ muốn người khác không thể truy cập vào trang web của bạn." },
    { id: 22, title: "Lỗ hổng 22: Email Spoofing", description: "Giả mạo email là hành vi gửi email có địa chỉ \"người gửi\" giả mạo." },
    { id: 23, title: "Lỗ hổng 23: Malvertising", description: "Các quảng cáo là mục tiêu phổ biến của tin tặc." },
    { id: 24, title: "Lỗ hổng 24: Lax Security Settings", description: "Cài đặt bảo mật không phù hợp là nguyên nhân phổ biến gây ra nhiều lỗ hổng bảo mật." },
    { id: 25, title: "Lỗ hổng 25: Toxic Dependencies", description: "Những thư viện của bên thứ ba có thể đưa lỗ hổng bảo mật hoặc mã độc vào hệ thống của bạn." },
    { id: 26, title: "Lỗ hổng 26: Logging and Monitoring", description: "Việc ghi lại nhật ký và giám sát toàn diện hoạt động của trang web giúp bạn theo dõi những gì trang web đang làm khi hoạt động, đây là yếu tố quan trọng để phát hiện các sự kiện bảo mật." },
    { id: 27, title: "Lỗ hổng 27: Buffer Overflows", description: "Hacker có thể sử dụng lỗi tràn bộ đệm để đánh sập trang web của bạn hoặc đưa mã độc vào." },
    { id: 28, title: "Lỗ hổng 28: Server-Side Request Forgery", description: "Hacker có thể sử dụng lỗ hổng SSRF để thăm dò mạng nội bộ của bạn." },
    { id: 29, title: "Lỗ hổng 29: Host Header Poisoning", description: "Sẽ rất nguy hiểm nếu dựa vào giá trị được cung cấp trong tiêu đề Host của yêu cầu HTTP." },
    { id: 30, title: "Lỗ hổng 30: Insecure Design", description: "Lỗ hổng bảo mật có thể xuất hiện từ lúc bạn đang thiết kế hệ thống." },
    { id: 31, title: "Lỗ hổng 31: Mass Assignment", description: "Đôi khi, việc tự động giải nén dữ liệu từ yêu cầu HTTP có thể quá dễ dàng để tấn công." },
    { id: 32, title: "Lỗ hổng 32: Prototype Pollution", description: "Nếu Hacker có thể truy cập và sửa đổi các đối tượng nguyên mẫu trong JavaScript, bạn sẽ gặp nguy hiểm." },
    { id: 33, title: "Lỗ hổng 33: SSL Stripping", description: "Nếu có một số hành động trên trang web của bạn yêu cầu HTTPS, Hacker có thể đánh cắp được thông tin đăng nhập của người dùng." }, // 38
    { id: 34, title: "Lỗ hổng 34: Regex Injection", description: "Biểu thức chính quy thường được sử dụng trong phát triển web nhưng có thể bị Hacker lợi dụng." },
    { id: 35, title: "Lỗ hổng 35: Remote Code Execution", description: "Nếu Hacker có thể lén đưa mã vào tiến trình máy chủ web của bạn, bạn sẽ gặp phải vấn đề nghiêm trọng." },
    { id: 36, title: "Lỗ hổng 36: Cross-Site Script Inclusion", description: "Nếu bạn đưa dữ liệu nhạy cảm vào tệp JavaScript của mình thì có khả năng Hacker sẽ đánh cắp dữ liệu đó." },
    { id: 37, title: "Lỗ hổng 37: Downgrade Attacks", description: "Hacker có thể chặn, đọc và thao túng lưu lượng HTTPS nếu bạn không chỉ định phiên bản TLS hiện đại." },
    { id: 38, title: "Lỗ hổng 38: DNS Poisoning", description: "Nếu bộ đệm DNS thượng nguồn (Upstream DNS) bị đầu độc, Hacker có thể chặn lưu lượng trước khi nó đến được bạn." },
    { id: 39, title: "Lỗ hổng 39: Subdomain Squatting", description: "Hacker sẽ đánh cắp các tên miền phụ để phân phối phần mềm độc hại và thực hiện tấn công lừa đảo." }, // 33
];

function loadLessons() {
    const lessonList = document.getElementById('lesson-list');

    lessons.forEach(lesson => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a style="text-decoration: none" href="../pages/lessons/lesson${lesson.id}.html">
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
            </a>
        `;
        lessonList.appendChild(listItem);
    });
}

window.onload = loadLessons;


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function searchLessons() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const ul = document.getElementById('lesson-list');
  const li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
      const text = li[i].textContent || li[i].innerText;
      if (text.toLowerCase().indexOf(filter) > -1) {
          li[i].style.display = '';
      } else {
          li[i].style.display = 'none';
      }
  }
}