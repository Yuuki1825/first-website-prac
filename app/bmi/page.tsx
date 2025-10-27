"use client";

export default function Page() {
  const myName: string = "山田太郎";
  const myHeight: number = 170;
  const myWeight: number = 70;

  function calcBmi(name: string, height: number, weight: number) {
    const bmi = (weight / ((height / 100) * (height / 100)));
    alert(name + "さんのBMIは" + bmi + "です。");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">BMI 計算アプリ</h1>
      <button
        onClick={
            () => calcBmi(myName, myHeight, myWeight)
        }
        className="px-6 py-3 bg-blue-500 text-white rounded"
      >
        BMI を計算
      </button>
    </div>
  );
}
