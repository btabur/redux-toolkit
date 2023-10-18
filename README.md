# redux Toolkit

## toolkit nedir?
- Normal redux a göre bir çok olumlu yönü vardır. Thunk gibi kütüphaneler içerisinde kuruludur. action,actionTypes gibi ek kklasörler oluşturmamıza gerek yoktur. Bunun yerine Slice yapısı vardır.
- Her bir slice store dan pasta dilimi şeklinde pay alır. Store abone olduğumuzda direk slice'a erişerek state'i doğrudan alabiliyoruz. Slice yapısı reducer ve action'u kendi içerisinde barındırır.

## Kurulumu
1. kütüphane indirme
`npm i react-redux @reduxjs/toolkit`

2. Slice oluşturma 
src klasörünün altında bir tane redux klasörü oluşturulur. 
İçerisine slices klasörü oluşturulur.
Onun da içerisine ...slice.js dosyası oluşturulur.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:initialState,
    reducers: {
        increase:(state) => {
            state.count +=1
        }
    }
})

export const {increase} = counterSlice.actions

export default counterSlice.reducer
```
3. store dosyasını oluşturma
configoreStore metodu ile oluşturulur. artık birden fazla reducer kullanıldığında farklı bir metod kullanılmasına gerek kalmaz

```javascript
import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./slices/counterSlice"
import {crudReducer} from "./slices/crudSlice"

export default configureStore({
    reducer:{counterReducer,
    crudReducer}
})
```
4. Store projeye tanıtma

```javascript
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
  </Provider>
)
```
### kullanılan kütüphaneler
- @reduxjs/toolkit
- react-redux 
- react-bootstrap bootstrap
