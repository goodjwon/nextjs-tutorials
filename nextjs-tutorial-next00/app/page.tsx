"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [counter, setCounter] = useState(0)


  return (
   <div>
    <h1 > useState 에 대해서 이해하기 </h1>
    <div role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        주의사항
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <ul>
          <li>인터넷 사용 금지</li>
          <li>지난번 작성했던 코드는 참조 가능</li>
          <li>코딩 전에 글로 정리해 보기</li>
          <li>예제에 있는 속성은 모두 출력하게 만들되 모양은 같지 않아도 됨.</li>
        </ul>
      </div>
    </div>
    <h1 className='text-4xl my-4' >Counter {counter}</h1>
    <span>
      <button onClick={()=> setCounter( (num) => num + 1 )}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">+</button>
      <button onClick={()=> setCounter( (num) => num - 1 )}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>
     </span>
   </div>
  )
}
