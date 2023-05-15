import Image from 'next/image';
import phone from '../img/phoneholding.jpg'

function Category(){
    return (
      <section className="section bg-white">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">웨비코가 자랑하는 특징 </h1>

        <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div className="space-y-3">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">빠른 제작기간</h1>

                    <p className="text-gray-500">
                        웨비코의 원페이지 웹사이트는 템플렛기반으로 제작기간을 평균 5일 ~ 10일까지 타사 대비 80% 가까이 대폭 감소시켰습니다.
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">반응형 웹사이트</h1>

                    <p className="text-gray-500">
                      스마트폰 사용자가 대다수인 요즘, 웨비코는 사용자의 기기에 따라 자동으로 웹사이트의 크기를 조절하는 "반응형 웹사이트" 를 추가비용 없이 기본옵션으로 구성했습니다.
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">투명한 가격</h1>

                    <p className="text-gray-500">
                        이것저것 추가요금 붙는 웹사이트 제작 때문에 골치아프셨던 경험 있으신가요? 웨비코는 템플렛을 기반한 투명한 가격제로 운영하고 있습니다.                             
                    
                    <span className="mt-1 text-sm text-gray-500"> *도메인 및 호스팅은 제외이며, 별도의 월관리 비용은 없습니다. </span>
 
                    </p>
                </div>

                <div className="space-y-3">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize">빠르고 쉬운 업데이트</h1>

                    <p className="text-gray-500">
                        웹사이트에 이벤트, 프로모션, 메뉴사진 등을 업데이트 하셔야 하는데 엄청난 월관리비용이 고민이신가요? 웨비코는 별도의 월관리 비용이 없습니다. 업데이트가 필요하실때만 내용과 사진의 갯수 상관없이, 오직 $10로 빠르고 쉽게 업데이트 해드립니다. 
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
          <Image src={phone} alt="main image" className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" />

        </div>
    </div>
    </div>
</section>
    )
  }

  export default Category;;