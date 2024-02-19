"use client"

import { useCountStore } from "@/stores/count.store";
import { useSignUpInfoStore } from "@/stores/signup-info.store";
import Link from "next/link";

export default function Page() {
  const countStore = useCountStore((state) => state);
  const userInfoStore = useSignUpInfoStore((state) => state);

  return (
    <>
      <div>
        <h2>test/basic</h2>
      </div>
      <div>
        count: { countStore.count }
      </div>
      <div>
        <ul>
          <li>name: { userInfoStore.name }</li>
          <li>age: { userInfoStore.age }</li>
          <li>habit: { userInfoStore.habit }</li>
          <li>addr: { userInfoStore.addr }</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4">
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            countStore.incrementCount();
          }}
          >
          count 증가시키기
        </button>
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            userInfoStore.setName('홍길동');
          }}
          >
          user name 셋팅
        </button>
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            userInfoStore.setAge(33);
          }}
          >
          user age 셋팅
        </button>
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            userInfoStore.setHabit('그림그리기');
          }}
          >
          user habit 셋팅
        </button>
        <button 
          className="inline-flex flex-wrap px-2 py-0.5 text-xs text-slate-500 cursor-pointer border border-slate-500 hover:bg-slate-100"
          onClick={() => {
            userInfoStore.setAddr('주소');
          }}
          >
          user addr 셋팅
        </button>
      </div>
      <div>
        <Link href="/test/other">
          /test/other 페이지로 이동
        </Link>
      </div>
    </>
  );
}