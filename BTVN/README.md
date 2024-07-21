# Câu 1: Làm thế nào để viết ghi chú (comments) trong ReactJS?

- Ghi chú trong phần JavaScript: Dùng "//" cho ghi chú trên một dòng và " /* ... */ " cho ghi chú nhiều dòng.

``` js
// Đây là một ghi chú trên một dòng
const example = "Hello, World!";

/*
  Đây là một ghi chú trên nhiều dòng
  Bạn có thể viết nhiều dòng ghi chú ở đây
*/
function sayHello() {
  console.log(example);
}
```

- Ghi chú trong phần JSX: Dùng {/* ... */} để viết ghi chú trong JSX.

``` js
import React from 'react';

function App() {
  return (
    <div>
      {/* Đây là một ghi chú trong JSX */}
      <h1>Hello, World!</h1>
      
      {/*
        Đây là một ghi chú trên nhiều dòng trong JSX
        Bạn có thể thêm nhiều thông tin ở đây
      */}
      <p>Welcome to my website</p>
    </div>
  );
}

export default App;

```

# Câu 2: Ưu điểm của ReactJS là gì?

## Virtual DOM:
- React sử dụng Virtual DOM để cải thiện hiệu suất. Khi có sự thay đổi trong giao diện, React sẽ tạo ra một bản sao ảo của DOM, so sánh nó với bản DOM hiện tại (DOM thực) và chỉ cập nhật những phần thực sự thay đổi. Điều này giúp giảm thiểu số lượng thao tác trực tiếp trên DOM, giúp ứng dụng nhanh hơn.

## Component-Based Architecture:
- React cho phép phát triển ứng dụng bằng cách chia nhỏ giao diện thành các thành phần (component) có thể tái sử dụng. Mỗi thành phần tự quản lý trạng thái và logic riêng của nó, giúp mã nguồn trở nên dễ đọc, dễ quản lý và bảo trì.

## One-Way Data Binding:
- React sử dụng cách tiếp cận luồng dữ liệu một chiều, giúp dễ dàng theo dõi và kiểm soát trạng thái của ứng dụng. Điều này giúp cải thiện độ tin cậy và dễ dàng gỡ lỗi.

## JSX (JavaScript XML):
- JSX là một cú pháp mở rộng của JavaScript, cho phép viết các phần tử HTML trong JavaScript. JSX giúp viết các thành phần React một cách dễ dàng và trực quan hơn, tạo ra một mã nguồn dễ đọc và dễ hiểu.

## Strong Community and Ecosystem:
- React có một cộng đồng lớn và mạnh mẽ, cung cấp nhiều tài liệu, công cụ, thư viện và hỗ trợ từ cộng đồng. Ngoài ra, React còn được hỗ trợ bởi Facebook, đảm bảo sự phát triển liên tục và ổn định.

## Performance Optimization:
- React cung cấp nhiều công cụ và kỹ thuật tối ưu hóa hiệu suất như lazy loading, memoization, và code splitting, giúp ứng dụng chạy mượt mà và hiệu quả hơn.

## Compatibility with Other Libraries and Frameworks:
- React có thể tích hợp dễ dàng với các thư viện và framework khác như Redux (quản lý trạng thái), React Router (điều hướng), và nhiều công cụ khác để xây dựng các ứng dụng phức tạp.

## SEO-Friendly:
- React có thể được kết hợp với các kỹ thuật như server-side rendering (SSR) hoặc static site generation (SSG) để cải thiện khả năng SEO của ứng dụng, giúp nội dung trang web được tải nhanh hơn và thân thiện với công cụ tìm kiếm hơn.

## React Native:
- React cũng có thể được sử dụng để phát triển ứng dụng di động thông qua React Native, giúp tận dụng kiến thức và mã nguồn React để phát triển các ứng dụng đa nền tảng (cross-platform).


# Câu 3: Các tính năng chính của ReactJS là gì?
- Virtual DOM
- Component-Based Architecture
- JSX (JavaScript XML)
- One-Way Data Binding
- React Hooks : React cung cấp các hook, cho phép sử dụng state và các tính năng khác của React mà không cần phải viết các class component. Các hook phổ biến như useState, useEffect, và useContext giúp quản lý trạng thái và các hiệu ứng phụ dễ dàng hơn.
- Context API: Context API cho phép truyền dữ liệu qua các component mà không cần phải truyền qua từng cấp của component tree. Điều này hữu ích cho việc quản lý trạng thái toàn cục, chẳng hạn như theme, ngôn ngữ, hoặc thông tin người dùng đăng nhập.
- React Router : React Router là một thư viện điều hướng (routing) phổ biến trong React, giúp tạo ra các ứng dụng web có nhiều trang. Nó cho phép điều hướng giữa các trang mà không cần tải lại trang, giữ cho trải nghiệm người dùng mượt mà.
- Server-Side Rendering (SSR)
- React Native


# Câu 4: Phân biệt Real DOM và Virtual DOM ?

## Cấu trúc
- Real Dom : Cây DOM thực, phần tử HTML thực
- Virtual DOM : Cây DOM ảo, tồn tại trong bộ nhớ

## Cập nhật
- Real Dom : Cập nhật và render lại toàn bộ
- Virtual DOM : Cập nhật Virtual DOM trước, sau đó diff và cập nhật Real DOM

## Hiệu suất
- Real Dom : Tốn kém hiệu suất khi cập nhật
- Virtual DOM : Tối ưu hóa hiệu suất, chỉ cập nhật phần thay đổi

## Áp dụng thay đổi
- Real Dom : Trực tiếp
- Virtual DOM : Gián tiếp thông qua Virtual DOM