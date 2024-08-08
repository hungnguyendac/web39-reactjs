# Câu 1: Props trong React là gì?

- Trong React, "props" là viết tắt của "properties" và chúng là một trong những cách quan trọng để truyền dữ liệu giữa các component. Props cho phép bạn truyền dữ liệu từ component cha (parent) xuống component con (child).

- Dưới đây là một số điểm chính về props trong React:

    1. Truyền Dữ Liệu: Props được sử dụng để truyền dữ liệu từ component cha xuống component con. Dữ liệu này có thể là bất kỳ giá trị nào, bao gồm số, chuỗi, mảng, đối tượng, hoặc thậm chí là các hàm.

    2. Immutable: Props là immutable, nghĩa là chúng không thể bị thay đổi bởi component con. Component con chỉ có thể sử dụng các props được truyền vào mà không được thay đổi giá trị của chúng.

    3. Sử dụng Props: Để truyền props, bạn thêm thuộc tính vào component con trong JSX của component cha. Trong component con, bạn có thể truy cập các props này thông qua đối tượng props.
    Ví dụ:
``` js
// Component cha
const ParentComponent = () => {
  const message = "Hello, World!";
  return <ChildComponent greeting={message} />;
}

// Component con
const ChildComponent = (props) => {
  return <h1>{props.greeting}</h1>;
}

export default App;

```
Trong ví dụ trên, component ParentComponent truyền giá trị của biến message dưới dạng props greeting đến component ChildComponent. Component ChildComponent sau đó truy cập và hiển thị giá trị của greeting thông qua props.

4. Prop Types: Để đảm bảo rằng component nhận đúng loại dữ liệu thông qua props, bạn có thể sử dụng thư viện PropTypes để xác định kiểu dữ liệu và tính bắt buộc của các props.

# Câu 2: Tại sao cần viết hoa các component?

- Trong React, các component cần được viết hoa (capitalized) vì React dựa vào quy ước này để phân biệt giữa các phần tử DOM gốc và các component React do người dùng định nghĩa. Đây là lý do cụ thể tại sao:

  1. Phân biệt giữa các phần tử HTML và component React:
      + Khi bạn viết một phần tử DOM gốc trong JSX (chẳng hạn như <div>, <span>, <p>), bạn sử dụng chữ thường.
      + Khi bạn viết một component React, bạn sử dụng chữ hoa (chẳng hạn như <MyComponent>, <Header>, <Footer>).
  Điều này giúp React dễ dàng phân biệt liệu một phần tử là một phần tử HTML gốc hay là một component tùy chỉnh.

  2. Tự động nhận diện component:
      + Nếu bạn không viết hoa tên component, React sẽ coi đó là một phần tử DOM gốc và sẽ cố gắng render một phần tử HTML với tên đó, điều này sẽ gây ra lỗi vì HTML không có các phần tử như <mycomponent>.
  3. Quy ước nhất quán:
      + Viết hoa component giúp giữ cho mã nguồn của bạn nhất quán và dễ đọc hơn. Những người khác đọc mã của bạn có thể dễ dàng nhận ra đâu là component React và đâu là phần tử HTML gốc.


# Câu 3: Fragment là gì?
- Trong React, Fragment là một thành phần cho phép bạn nhóm một danh sách các con (children) mà không cần phải thêm các phần tử không cần thiết vào DOM. Điều này rất hữu ích khi bạn muốn trả về nhiều phần tử từ một component mà không muốn bọc chúng trong một thẻ HTML như <div>, <span>, v.v.

- Dưới đây là một số đặc điểm chính của Fragment:

  + Không thêm thẻ bao bọc vào DOM: Sử dụng Fragment giúp bạn tránh việc thêm các thẻ HTML không cần thiết vào cây DOM, giúp cấu trúc HTML gọn gàng hơn.

  + Cú pháp ngắn gọn: React cung cấp cú pháp rút gọn cho Fragment bằng cách sử dụng các thẻ trống (<> và </>), giúp mã nguồn trở nên ngắn gọn hơn.

  + Tránh các vấn đề về CSS và layout: Khi thêm các thẻ không cần thiết, bạn có thể gặp phải các vấn đề về CSS và layout. Sử dụng Fragment giúp tránh các vấn đề này vì nó không thêm bất kỳ thẻ nào vào DOM.

  + Hiệu suất: Mặc dù sự khác biệt về hiệu suất có thể không đáng kể trong hầu hết các trường hợp, nhưng việc tránh các thẻ không cần thiết có thể cải thiện hiệu suất trong các ứng dụng lớn hoặc phức tạp.


# Câu 4: Sự khác biệt giữa “Element” và “Component” trong React?

## React Element
- Định nghĩa: Một React Element là khối cơ bản nhất của React. Nó đại diện cho một node trong DOM. React Element là đối tượng JavaScript đơn giản mô tả một thẻ DOM hoặc một component React với các thuộc tính và con của nó.

- Tạo ra: Bạn thường không tạo trực tiếp các React Element mà thay vào đó sử dụng JSX. Khi JSX được biên dịch, nó tạo ra các React Element.

- Immutable: React Elements là immutable, có nghĩa là sau khi được tạo ra, chúng không thể thay đổi. Mọi thay đổi yêu cầu tạo ra một element mới.
Ví dụ:
```js
const element = <div className="greeting">Hello, world!</div>;
```

## React Component
- Định nghĩa: Một React Component là một hàm hoặc một lớp có thể nhận đầu vào (props) và trả về các React Element.Components cho phép bạn chia ứng dụng thành các phần nhỏ, tái sử dụng được.
- Tạo ra: Có hai loại component chính: Functional Components và Class Components.
Functional Components: Được định nghĩa như là các hàm JavaScript. Bắt đầu từ React 16.8, hooks cho phép functional components có trạng thái và sử dụng các lifecycle methods.
  + Functional Components: Được định nghĩa như là các hàm JavaScript. Bắt đầu từ React 16.8, hooks cho phép functional components có trạng thái và sử dụng các lifecycle methods.
  ```js
    function Greeting(props) {
      return <h1>Hello, {props.name}</h1>;
    }
  ```
  + Class Components: Được định nghĩa như là các lớp JavaScript mở rộng từ React.Component. Class components có thể có trạng thái và sử dụng các lifecycle methods.
  ```js
    class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

  ```
- Reusable: Components có thể tái sử dụng, kết hợp và lồng nhau để xây dựng các giao diện phức tạp.
- State và Lifecycle: Components có thể có trạng thái (state) và sử dụng các phương thức vòng đời (lifecycle methods) để quản lý trạng thái và side effects.


## Tóm tắt sự khác biệt
- React Element là đối tượng mô tả cấu trúc giao diện và không thể thay đổi sau khi tạo.
- React Component là các hàm hoặc lớp có thể chấp nhận đầu vào (props) và trả về các React Element. Components có thể có trạng thái và quản lý vòng đời.
