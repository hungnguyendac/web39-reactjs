# Câu 1: State được lưu ở đâu trong ứng dụng React + Redux?

1. Component State (State trong Component): Đây là state nội bộ của từng component. Được quản lý bằng hook useState trong các function component hoặc bằng this.state trong các class component. State này chỉ tồn tại trong phạm vi của component đó và không thể chia sẻ trực tiếp với các component khác.

2. Redux Store (State trong Redux): Đây là nơi lưu trữ global state của ứng dụng, có thể chia sẻ và truy cập từ bất kỳ component nào trong ứng dụng. Redux store được tạo ra bằng cách sử dụng createStore từ thư viện Redux.

3. Context API (State trong Context): Context API của React cũng có thể được sử dụng để quản lý global state, tương tự như Redux nhưng thường được sử dụng cho các ứng dụng nhỏ hoặc state không quá phức tạp.

4. Local Storage / Session Storage: Mặc dù không phải là một phần của React hoặc Redux, Local Storage và Session Storage của trình duyệt cũng có thể được sử dụng để lưu trữ dữ liệu cần thiết giữa các lần tải trang.



# Câu 2: Điểm mấu chốt (mạnh nhất) của Redux là gì?
Điểm mấu chốt (mạnh nhất) của Redux chính là quản lý state một cách nhất quán và dự đoán được trong các ứng dụng lớn và phức tạp. Đây là những điểm mạnh chính của Redux:

- Single Source of Truth (Nguồn sự thật duy nhất): Toàn bộ state của ứng dụng được lưu trữ trong một object tree duy nhất gọi là store. Điều này giúp dễ dàng quản lý và theo dõi trạng thái của ứng dụng.

- State là chỉ-read (Read-only State): State trong Redux chỉ có thể được thay đổi bằng cách gửi một action. Điều này đảm bảo rằng các thay đổi state luôn có thể dự đoán và theo dõi được.

- Changes are Made with Pure Functions (Thay đổi được thực hiện bằng các hàm thuần): Reducer là các hàm thuần (pure functions) nhận vào state hiện tại và một action, sau đó trả về state mới. Điều này giúp các thay đổi trở nên dễ dàng kiểm thử và dự đoán.

- Predictability of Outcome (Tính dự đoán được của kết quả): Bởi vì state chỉ có thể thay đổi thông qua các action và reducer, bạn có thể dễ dàng dự đoán kết quả của bất kỳ thay đổi nào trong state. Điều này cũng giúp việc debug trở nên dễ dàng hơn.

- Centralized Debugging (Debug tập trung): Với các công cụ như Redux DevTools, bạn có thể theo dõi tất cả các thay đổi của state trong thời gian thực, thực hiện time-travel debugging, và kiểm thử ứng dụng một cách hiệu quả.

- Middleware: Redux hỗ trợ middleware, cho phép bạn can thiệp vào quá trình dispatch action. Middleware có thể được sử dụng để xử lý các side effects như async actions (ví dụ: redux-thunk, redux-saga) hoặc để logging, crash reporting, v.v.

- Ecosystem (Hệ sinh thái): Redux có một hệ sinh thái phong phú với nhiều thư viện và công cụ hỗ trợ, giúp việc phát triển các ứng dụng phức tạp trở nên dễ dàng hơn.


# Câu 3: Các middleware thường được chọn để xử lý các lời gọi bất đồng bộ trong Redux là gì?

1. redux-thunk
2. redux-saga
3. redux-observable
4. redux-promise

# Câu 4: Redux Thunk được sử dụng để làm gì?

- Redux Thunk được sử dụng để xử lý logic bất đồng bộ trong các ứng dụng Redux. Cụ thể, nó cho phép bạn viết các action creators trả về các hàm thay vì trả về các action objects. Các hàm này có thể thực hiện các tác vụ bất đồng bộ như gọi API, dispatch các action khác khi nhận được phản hồi, hoặc thực hiện bất kỳ logic bất đồng bộ nào trước khi dispatch action đồng bộ.
- Ví dụ: Sử dụng Redux Thunk để thực hiện một yêu cầu API và dispatch kết quả:

```js
  // action.js
export const fetchData = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'FETCH_DATA_FAILURE', payload: error }));
  };
};
```
- Trong ví dụ này, fetchData là một thunk action creator trả về một hàm thay vì một object. Hàm này thực hiện một yêu cầu API, sau đó dispatch các action dựa trên kết quả của yêu cầu đó.