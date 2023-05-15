function Feature(){
    return (
        <div className="section bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                웨비코가 제공하는 <span className="underline decoration-blue-500">3단계</span> 웹사이트</h1>
    
            <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                웨비코의 원페이지 웹사이트는 스마트폰, 태블릿, 컴퓨터 화면의 크기에 맞춰 자동으로 사이즈가 조절되는 "반응형 웹사이트" 입니다.
            </p>
            </div>
    
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                    <span className="inline-block text-blue-500 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>
    
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">템플렛 선택</h1>
    
                    <p className="text-gray-500 dark:text-gray-300">
                        간단한 상담후, 웨비코가 맞춤 템플렛을 추천해드립니다.
                    </p>
                    </div>
    
                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                    <span className="inline-block text-blue-500 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>
    
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">제작</h1>
    
                    <p className="text-gray-500 dark:text-gray-300">
                        웹사이트에 들어갈 문구, 사진 및 정보들을 바탕으로 웹사이트를 제작합니다. 
                    </p>
                    </div>
    
                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                    <span className="inline-block text-blue-500 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>
    
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">최종 컨펌</h1>
    
                    <p className="text-gray-500 dark:text-gray-300">
                        완성된 샘플을 최종 컨펌해주세요! 
                    </p>
                </div>
            </div>
        </div>
    </div> 
    )
  }

  export default Feature;