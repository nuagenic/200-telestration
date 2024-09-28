/**
 * Playground Page to experiment text card layout.
 */

import Card from "@/components/Card";

export type CardType = {
  id: string;
  type: "text" | "image";
  createdBy: "백" | "이";
  createdAt: Date;
  content: string;
};

export default function Playground() {
  const startIndex = 1;
  const testCards: CardType[] = [
    {
      id: "1",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
      <div class="w-full h-full flex justify-center items-center leading-relaxed">
        <div>
            <p class="font-bold">붕괴의 결정화</p>
            <br /><br />
            <p>시간 세는 법을 배우며 컸다,<br />처음에는 시계로<br />그 다음엔 달라지는 몸으로,<br />그 다음엔 떠나간 사람들로,</p>
            <br />
            <p>내 자리를 지킨다, 내 자리를 지켜도 시간은 간다<br />내 시간을 지킬 수 없다, 시간은 내 것이 아니므로</p>
            <br />
            <p>나는 이제 시간 세는 법을 하나밖에 모른다</p>
        </div>
      </div>
      `,
    },
    {
      id: "2",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
        <div class="w-full h-full flex justify-center items-center p-12 leading-loose">
          <div>
              <p>너는 오로지 빛과 그늘, 식별 가능한 몇 개의 덩어리, 약탈된 심장, 박탈된 골수, 너는 표면, 표류하는 앞면, 너는 .jpg, 0과 1의 자유로운 유희, 점유하는 세입자, 약탈된 인장, 박탈된 정수, 너는 오로지 빛과 빛의 없음, 너는 조작적 정의, 부당한 기억, 그 자신에게는 억울할지도 모르는 불가항력, 너는 마침내 네가 아닌 것, 너는 오로지 너의 없음, 민들레 홀씨, 폭죽이 스민 밤, 유년의 상처, 고개 숙인 해바라기, 고개, 숙인, 해, 바, 라, 기,</p>
          </div>
        </div>
        `,
    },
    {
      id: "3",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
          <div class="w-full h-full flex justify-center items-center leading-loose">
            <div>
                <p>
                글에 몹쓸 짓을 해서 이제 못쓸 글입 니다<br />
                글글 니다 몹못 서쓸 쓸에 을이 입제 짓해<br />
                쓸쓸 해제 니글 에서 못다 <del>몹짓</del> 이글 입을<br />
                우주 기만 대면 혼자 뒤편 취소 스물 상상<br />
                <ins>기대</ins> 뒤만 면물 <ins>상상</ins> <ins>소스</ins> 우자 <ins>주취</ins> 편혼<br />
                주스 상대 자취 우편 만물 혼기 소면 <del>뒤상</del><br />
                변신 접선 한때 시차 하나 그저 물결 취소<br />
                글에 몹쓸 짓을 해서 이제 못쓸 글입 니다<br />
            </div>
          </div>
          `,
    },
    {
      id: "4",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
            <div class="w-full h-full flex justify-center items-center leading-loose">
              <div>
                  <p>걸어, 걸어, 걸어, 걸어, 걸어, 걸어, 걸어, 여기도 매미 소리가 들립니까?<br />
                  누가 불을 붙였습니까?<br />
                  그는 외화로 죽었습니까?<br />
                  울었습니까?<br />
                  보라매가 봉천이 생각나요, 땀 많이 흘리고 씻겠습니다.<br />
                  눈이 고양이처럼 비비는데 없는 것 같아요. 제가 된 고양이가 생각나요.<br />
                  매미가 생각나요. 생각나요. 그러면 귀에 라디오 헤드폰이 있나요?
                  </p>
              </div>
            </div>
            `,
    },
    {
      id: "5",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
              <div class="w-full h-full flex justify-center items-center leading-loose">
                <div>
                    <p>예술은 암호가 아니라 암구호다</p>
                </div>
              </div>
              `,
    },
    {
      id: "6",
      type: "text",
      createdBy: "백",
      createdAt: new Date(),
      content: `
                <div class="w-full h-full flex flex-col justify-between p-8">
                  <div class="flex justify-end">
                      <p class="font-bold text-4xl">VERGE</p>
                  </div>
                  <div class="flex flex-col gap-3 justify-start whitespace-pre">
                        <p class="font-medium">01.        Armistice</p>
                        <p class="font-medium">02.        New Task Freestyle</p>
                        <p class="font-medium">03.        봉천동 5</p>
                        <p class="font-medium">04.        ANTITATTOO</p>
                        <div class="flex items-baseline gap-3"><p class="font-medium">05.        혀가 있다 (Interlude)</p><p class="font-light text-xs">(feat. NAKTATA)</p></div>
                        <p class="font-medium">06.        꿈 들어가기 직전 *</p>
                        <p class="font-medium">07.        K-afka</p>
                        <p class="font-medium">08.        노리타</p>
                        <p class="font-medium">09.        O/O (Interlude)</p>
                        <div class="flex items-baseline gap-3"><p class="font-medium">10.        OTVO</p><p class="font-light text-xs">On The Verge Of</p><p class="font-medium">*</p></div>
                  </div>
                </div>
                `,
    },
  ];

  return (
    <main className="overflow-hidden w-full h-full">
      <Card cards={testCards} startIndex={startIndex} />
    </main>
  );
}
