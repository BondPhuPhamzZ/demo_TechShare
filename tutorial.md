# Hướng dẫn Từng bước Làm Đồ án Môn Công nghệ Phần mềm

**Đề tài:** Nền tảng chia sẻ thiết bị (Tech Share)
**Công nghệ sử dụng:** HTML/CSS/JS/Bootstrap (Frontend), C# ASP.NET Core MVC (Backend), SQL Server (Database).

Dưới đây là lộ trình chuẩn chỉnh giúp nhóm bạn từ bây giờ đến lúc nộp đồ án có thể hoàn thành một cách khoa học, chuyên nghiệp, dễ lấy điểm tuyệt đối từ giảng viên.

---

## Giai đoạn 1: Chuẩn bị & Phân tích (Tuần 1)

Đây là bước cực kỳ quan trọng giúp giảng viên thấy nhóm có làm việc bài bản (Quy trình Công nghệ phần mềm).

1. **Vẽ Biểu đồ Use Case:**
   - **Actor User (Sinh viên):** Đăng nhập/Đăng ký, Tìm kiếm thiết bị, Đăng đồ cho thuê, Đặt thuê đồ, Viết đánh giá, Quản lý tài khoản.
   - **Actor Admin:** Đăng nhập, Duyệt bài đăng, Xóa bài đăng, Khóa tài khoản.
2. **Thiết kế Database (SQL Server):**
   - Bảng `Users`: `Id`, `FullName`, `MSSV`, `Email`, `PasswordHash`, `Role` (Admin/User), `Status`.
   - Bảng `Categories`: `Id`, `Name` (Laptop, Máy ảnh, Máy chiếu...).
   - Bảng `Devices`: `Id`, `Name`, `CategoryId`, `OwnerId` (Sinh viên đăng), `PricePerDay`, `Deposit`, `Description`, `ImageUrl`, `Status` (Chờ duyệt, Sẵn sàng, Đang cho thuê).
   - Bảng `Rentals (Giao dịch)`: `Id`, `DeviceId`, `RenterId`, `StartDate`, `EndDate`, `TotalRent`, `DepositAmount`, `Status` (Chờ nhận máy, Đang thuê, Đã trả máy).
   - Bảng `Reviews`: `Id`, `RentalId`, `RenterId`, `OwnerId`, `Stars`, `Comment`.

---

## Giai đoạn 2: Khởi tạo Project (Tuần 2)

1. **Tạo Project C#:** Mở Visual Studio -> Create a new project -> Chọn **ASP.NET Core Web App (Model-View-Controller)**. Đặt tên là `TechShareApp`.
2. **Setup Database (Entity Framework Core):**
   - Cài đặt các gói NuGet: `Microsoft.EntityFrameworkCore.SqlServer`, `Microsoft.EntityFrameworkCore.Tools`.
   - Viết các class Models (dựa theo Giai đoạn 1).
   - Chạy lệnh `Add-Migration InitialCreate` và `Update-Database` để tự động sinh ra các bảng trong SQL Server.
3. **Ghép Frontend (Bản Demo hiện tại):**
   - Bê toàn bộ thư mục `css`, `js`, và hình ảnh vào thư mục `wwwroot` của project ASP.NET.
   - Bê các file `index.html`, `catalog.html` chuyển thành các view `Index.cshtml`, `Catalog.cshtml` trong thư mục `Views/Home`.

---

## Giai đoạn 3: Code Logic Cốt lõi (Tuần 3 - 4)

**Tính năng 1: Đăng nhập & Phân quyền (Authentication & Authorization)**

- Sử dụng _ASP.NET Core Identity_ hoặc _Cookie Authentication_ cơ bản.
- Khi đăng nhập với `Role = Admin`, chuyển hướng (Redirect) về `AdminController`.
- Khi đăng nhập với `Role = User`, chuyển hướng về `HomeController` hoặc `ProfileController`.

**Tính năng 2: Đăng bài cho thuê (Create Device)**

- Tại trang `post.html`, tạo Form có `<form method="post" enctype="multipart/form-data">` để upload ảnh.
- Backend nhận ảnh, lưu vào `wwwroot/images/uploads/`, và lưu thông tin thiết bị vào bảng `Devices` với trạng thái `Pending` (Chờ duyệt).

**Tính năng 3: Quản trị của Admin (Admin Dashboard)**

- Lấy toàn bộ danh sách `Devices` có trạng thái `Pending` hiển thị lên bảng.
- Viết 2 nút: `Duyệt` (Đổi status thành 'Sẵn sàng') và `Từ chối` (Xóa khỏi DB).

**Tính năng 4: Đặt thuê (Rent System)**

- Người dùng bấm "Thuê", hệ thống tính toán (Ngày trả - Ngày mượn) \* Giá + Tiền cọc.
- Lưu xuống bảng `Rentals`. Chuyển trạng thái máy thành `Đang cho thuê`.

---

## Giai đoạn 4: Hoàn thiện & Test báo cáo (Tuần 5)

1. **Tạo dữ liệu ảo (Seed Data):** Hãy thêm thẳng vào database vài tài khoản có sẵn (ví dụ 1 Admin, 3 User), và khoảng 10 bài đăng thiết bị (Mượn ảnh Unsplash). Tuyệt đối **không báo cáo với Database trắng tinh**, thầy cô sẽ đánh giá thấp.
2. **Kịch bản lúc báo cáo với Thầy cô (RẤT QUAN TRỌNG):**
   - **Bước 1:** Trình chiếu Silde báo cáo (Nêu bối cảnh: Sinh viên thiếu thiết bị, cần nền tảng tin cậy).
   - **Bước 2:** Đăng nhập tài khoản **User A** -> Đăng một bài cho thuê "Macbook Pro".
   - **Bước 3:** Đăng nhập **Admin** -> Vào trang Quản trị, ấn **Duyệt bài**.
   - **Bước 4:** Đăng nhập **User B** -> Tìm kiếm thấy Macbook Pro -> Bấm **Thuê ngay** -> Cho thầy cô xem bảng tính tiền tự động.
   - **Bước 5:** User B trả máy -> Để lại **Đánh giá 5 sao** cho User A.

---

### Tài khoản khuyên dùng để hardcode lúc Demo:

Khi chuẩn bị nộp bài, hãy tạo sẵn các tài khoản sau trong Database để lên thuyết trình cứ thế bấm đăng nhập, không tốn thời gian đăng ký:

**1. Quản trị viên (Admin):**

- **Email:** `admin@techshare.vn`
- **Mật khẩu:** `admin123`
- _Chỉ có tài khoản này mới vào được giao diện Admin._

**2. Sinh viên (User đi thuê/cho thuê):**

- **MSSV/Email:** `20110000` (Tuấn Anh)
- **Mật khẩu:** `123456`
