import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-150 bg-gray-300 flex items-center justify-center">
        <img src="./hoyo.jpg" className="w-120 h-120"/>
      </div>
    </>
  );
}
