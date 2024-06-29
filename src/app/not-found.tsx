import Link from "next/link";
import { NextPage } from "next";

export default function NotFound() {
  return (
    <div>
      <div>존재하지 않는 페이지입니다. 다시 검색해주세요.</div>
      <Link href="/search">검색</Link>
    </div>
  );
}
