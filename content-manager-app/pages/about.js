

function About(){
    return (
      <section className="section bg-white">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
            웨비코의 원페이지 웹사이트
        </h1>

        <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-center max-w-6xl mx-auto mt-16">
            <div>
            <h2 className="xl:text-3xl lg:text-2xl md:text-2xl text-lg italic mb-8 flex items-center text-center text-gray-500 lg:mx-8">
                    "나는 그냥 심플한 웹사이트가 필요해요.."
                    </h2>
                <p className="mb-8 flex items-center text-gray-500 lg:mx-8">
                    텍사스주 달라스 지역에 위치한 웨비코는 미주 200만 한인들을 위해 웹사이트 제작을 도와드리고 있습니다. 웨비코의 원페이지 웹사이트는 복잡한 기능, 머리아픈 제작과정을 과감하게 생략하여 가격은 대폭 줄이고, 
                    필요한 핵심 기능들로만 쏙쏙 구성한 최고의 가성비 웹사이트 입니다. 빠르고 양질의 서비스를 위해 이커머스, 풀 커스터마이즈 웹사이트 서비스를 제외하고 오직, 템플렛 베이스 웹사이트만 집중하여 서비스 하고 있습니다. 그로인해, 보통 몇달이 걸리는 제작기간을 3일에서 10일로 대폭 줄여, 모두가 만족하는 서비스를 제공하고 있습니다.
                </p>
            </div>

        </div>
    </div>
</section>
    )
  }

  export default About;