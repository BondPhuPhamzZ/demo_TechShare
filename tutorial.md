# Hướng dẫn Báo cáo Đồ án: Nền tảng chia sẻ thiết bị Tech Share

Chào các bạn, đây là tài liệu hướng dẫn (Tutorial) dành cho nhóm để hiểu rõ luồng đi của dự án cũng như tự tin hơn khi lên thuyết trình/báo cáo môn Công nghệ phần mềm.

## 1. Tổng quan Phân quyền (Roles) trong dự án

Dự án này sử dụng mô hình sàn TMĐT (như Shopee), nghĩa là chúng ta chỉ có **2 Roles chính**:

- **USER (Sinh viên):** Mọi tài khoản đăng ký mặc định là User. Một User có thể VỪA đăng bài cho thuê để kiếm tiền, VỪA có thể đi mượn đồ của người khác. (Giao diện tại `index.html` và `profile.html`).
- **ADMIN (Quản trị viên):** Không tham gia giao dịch. Nhiệm vụ chính là kiểm duyệt các bài đăng mới (xem có đúng quy định mượn đồ học tập không, hay lại bán acc game), xóa các bài đăng quá hạn, và khóa tài khoản các sinh viên lừa đảo/bom hàng. (Giao diện tại `admin.html`).

---

## 2. Kịch bản Demo Giao diện Frontend cho Giảng viên

Khi chiếu màn hình Demo HTML cho thầy cô xem, các bạn hãy làm theo các bước sau để thuyết phục nhất:

**Bước 1: Giới thiệu Trang chủ (`index.html`) & Danh mục (`catalog.html`)**

- _Lời dẫn:_ "Thưa thầy cô, đây là giao diện trang chủ của Tech Share - hệ thống giúp sinh viên mượn các thiết bị đắt tiền như Laptop, máy ảnh phục vụ đồ án ngắn hạn."
- _Hành động:_ Click vào nút **Tìm kiếm** hoặc **Xem danh mục** để mở file `catalog.html`. Chỉ ra cho thầy cô thấy bộ lọc bên tay trái (Lọc theo danh mục, mức giá).

**Bước 2: Giới thiệu Chi tiết thiết bị & Đánh giá (`detail.html`)**

- _Lời dẫn:_ "Để giải quyết vấn đề cốt lõi là sự tin tưởng, nhóm em đã tích hợp **Hệ thống đánh giá Uy tín**. Sinh viên đi mượn có thể xem được số sao của chủ máy, trạng thái xác thực và các đánh giá cũ."
- _Hành động:_ Mở `detail.html`, cuộn xuống chỉ phần Đánh giá sao (★★★★☆).

**Bước 3: Giao dịch & Tính toán tiền (`rent.html`)**

- _Lời dẫn:_ "Khi ấn nút Đặt thuê, hệ thống sẽ mở ra Form tính tiền minh bạch. Tiền mượn và Tiền cọc được tách rõ."
- _Hành động:_ Mở `rent.html`, thử thay đổi con số trong ô **Nhập số ngày mượn**. Tiền "Tổng cộng" sẽ tự động nhảy lên (Được code sẵn bằng JS) -> _Thầy cô rất thích tính năng tự tính toán này._

**Bước 4: Góc nhìn của Quản trị viên (`admin.html`)**

- _Lời dẫn:_ "Cuối cùng, để tránh việc sinh viên đăng tin rác, nhóm em xây dựng một trang Dashboard cho Admin."
- _Hành động:_ Mở `admin.html` lên. Chỉ cho thầy cô thấy các nút "Duyệt / Từ chối" bài đăng, hoặc nút "Xóa bài / Khóa tài khoản" khi có vi phạm.

---

## 3. Đánh giá tính khả thi cho Đồ án Môn Công nghệ Phần mềm

**Theo góc nhìn chuyên môn, đề tài này CỰC KỲ KHẢ THI và rất DỄ ĐẠT ĐIỂM CAO vì các lý do sau:**

1. **Vừa vặn sức sinh viên:** Đây bản chất là một ứng dụng CRUD (Create, Read, Update, Delete) nâng cao, rất phù hợp với công nghệ C# ASP.NET Core & SQL Server mà nhóm đang làm.
2. **Logic nghiệp vụ rõ ràng:** Nó không quá chung chung như các web "Bán hàng" thông thường. Mượn đồ có một nghiệp vụ rất thực tế là "Tiền cọc" và "Ngày trả". Thầy cô thường đánh giá cao những nhóm có logic tính toán tiền cọc thay vì chỉ làm web bán giày/bán quần áo.
3. **Cơ sở dữ liệu (Database) dễ thiết kế:**
   - Bảng `Users` (Id, Role, MSSV, Password, Rating...)
   - Bảng `Categories` (Id, Name)
   - Bảng `Items` (Id, Name, PricePerDay, Deposit, Status, OwnerId...)
   - Bảng `Transactions/Rentals` (Id, ItemId, RenterId, RentDays, TotalPrice, Status...)
   - Bảng `Reviews` (Id, RenterId, OwnerId, Stars, Comment)

_Chúc nhóm bạn code thật mượt và đạt điểm A+ môn đồ án này nhé!_
