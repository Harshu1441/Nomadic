import GroupComponent2 from "./group-component2";
import PropTypes from "prop-types";

const TripContent = ({ className = "" }) => {
  const handleCall=()=>{
    alert("For Contact Us To Call Now +91 9418011200");
  }
  return (
    <section
      className={`w-[1423px] flex flex-row items-start justify-end py-0 px-[65px] box-border max-w-full mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      <form className="m-0 h-[3737px] flex-1 overflow-hidden flex flex-row items-start justify-start pt-[65px] pb-[106px] pr-3 pl-0 box-border gap-[12px] max-w-full z-[1] lg:pt-5 lg:pb-[29px] lg:box-border mq750:pb-5 mq750:box-border mq450:h-auto">
        <div className="h-[5767px] w-px relative box-border hidden border-r-[1px] border-solid border-text-color-secondary" />
        <div className="h-[76px] w-[300px] relative bg-gray-200 hidden" />
        <div className="h-[120px] w-[300px] relative bg-gray-200 hidden" />
        <div className="w-[315px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border mq1050:hidden">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32.8px] mq450:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="w-[159.8px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[16.5px]">
                  <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/teenyiconstickcircleoutline.svg"
                    />
                  </div>
                  <div className="flex-1 relative text-5xl font-medium font-matter text-gold-100 text-left shrink-0 mq450:text-lgi">
                    Overview
                  </div>
                </div>
              </div>
              <img
                className="h-[21.3px] w-[22px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-11308.svg"
              />
            </div>
            <div className="w-[250px] flex flex-row items-start justify-start gap-[17px]">
              <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/teenyiconstickcircleoutline-1.svg"
                />
              </div>
              <div className="flex-1 relative text-5xl font-medium font-matter text-text-color-secondary text-left mq450:text-lgi">
                Itinerary
              </div>
            </div>
            <div className="w-[300px] flex flex-row items-start justify-start gap-[17px]">
              <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/teenyiconstickcircleoutline-1.svg"
                />
              </div>
              <div className="flex-1 relative text-5xl font-medium font-matter text-text-color-secondary text-left mq450:text-lgi">{`Inclusions & Exclusions`}</div>
            </div>
            <div className="w-[286px] flex flex-row items-start justify-start py-0 px-px box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
                <button onClick={handleCall} className="cursor-pointer [border:none] py-[18px] pr-[19px] pl-5 bg-gold-100 self-stretch rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-goldenrod-100">
                  <div className="h-[77px] w-[284px] relative rounded-lg bg-gold-100 hidden" />
                  <div className="h-[41px] flex-1 relative text-xl leading-[140%] font-semibold font-montserrat text-black text-center flex items-center justify-center z-[1]">
                    Call Us to Book
                  </div>
                </button>
                <button className="cursor-pointer py-4 pr-[19px] pl-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-gold-100 hover:bg-goldenrod-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-goldenrod-100">
                  <div className="h-[77px] w-[284px] relative rounded-lg box-border hidden border-[1px] border-solid border-gold-100" />
                  <div className="h-[41px] flex-1 relative text-xl leading-[140%] font-semibold font-montserrat text-gold-100 text-center flex items-center justify-center z-[1]">
                    Download Itinerary
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[3566px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border mq1050:hidden">
          <div className="w-px flex-1 relative box-border z-[3] border-r-[1px] border-solid border-gray-700" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[77px] max-w-[calc(100%_-_340px)] shrink-0 mq750:gap-[19px] mq1050:gap-[38px] mq1050:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-1.5 pl-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <h1 className="m-0 relative text-29xl font-bold font-inria-serif text-text-color-secondary text-left mq1050:text-19xl mq450:text-10xl">
                Overview
              </h1>
              <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-text-color-secondary text-justify">
                Embark on an immersive 13-day journey through Ladakh's
                breathtaking landscapes. Highlights include exploring Nubra
                Valley, visiting Pangong Lake, and experiencing the serene
                Tsomoriri Lake. Enjoy comfortable accommodations, meals, and
                hassle-free transportation.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[38px] max-w-full mq450:gap-[19px]">
              <h1 className="m-0 self-stretch relative text-29xl font-bold font-inria-serif text-text-color-secondary text-left mq1050:text-19xl mq450:text-10xl">
                Experience the best of Ladakh on this enriching expedition
              </h1>
              <h3 className="m-0 w-[370px] relative text-17xl font-bold font-inria-serif text-text-color-secondary text-left flex items-center max-w-full mq1050:text-10xl mq450:text-3xl">
                Itinerary
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <GroupComponent2 day1LehToShamValley="Day 1: Leh to Sham Valley" />
                <GroupComponent2 day1LehToShamValley="Day 2: Sham Valley to Lamayuru – Kargil" />
                <div className="self-stretch rounded-sm bg-text-color-secondary flex flex-col items-start justify-start pt-[29px] px-[23px] pb-8 box-border gap-[26.5px] max-w-full">
                  <div className="w-[930px] h-[283px] relative rounded-sm bg-text-color-secondary hidden max-w-full" />
                  <div className="w-[861px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
                      <div className="h-12 w-[296px] relative text-5xl font-semibold font-montserrat text-gray-200 text-left flex items-center shrink-0 z-[1] mq450:text-lgi">
                        Day 3: Kargil to Padum
                      </div>
                      <div className="h-6 w-0 flex flex-col items-start justify-end pt-0 px-0 pb-[23px] box-border">
                        <img
                          className="w-0 h-px relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/arrow-4-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-gray-800" />
                  <div className="w-[870px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
                      <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-black text-justify z-[2]">
                        <ul className="m-0 font-inherit text-inherit pl-6">
                          <li className="mb-0">{`Next morning after breakfast we’ll leave for Padum, Zanskar and in route we will visit the famous giant rock carved Maitreyi Buddha in the Karsekar Village. `}</li>
                        </ul>
                      </div>
                      <div className="self-stretch relative text-lg leading-[140%] font-montserrat text-black text-justify z-[2]">
                        <ul className="m-0 font-inherit text-inherit pl-6">
                          <li>{`Then we’ll continue to Padum via the Penzi La Pass where you can enjoy the heart soothing views of the Nun Kun Peak and Drang Drung Glacier. `}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent2 day1LehToShamValley="Day 4: Padum to Rangdum" />
                <GroupComponent2 day1LehToShamValley="Day 5: Rangdum to Kargil" />
                <GroupComponent2 day1LehToShamValley="Day 6: Kargil – Dha – Leh" />
                <GroupComponent2 day1LehToShamValley="Day 7: Leh to Nubra" />
                <GroupComponent2 day1LehToShamValley="Day 8: Nubra Valley Sightseeing" />
                <GroupComponent2 day1LehToShamValley="Day 9: Kargil – Dha – Leh" />
                <GroupComponent2 day1LehToShamValley="Day 10: Nubra to Pangong Lake via shyok" />
                <GroupComponent2 day1LehToShamValley="Day 11: Tsomoriri -tsokar – Tanglangla – Leh" />
                <GroupComponent2 day1LehToShamValley="Day 12: In Leh" />
                <GroupComponent2 day1LehToShamValley="Day 13: Airport Drop" />
              </div>
            </div>
          </div>
          <div className="w-[929px] flex flex-col items-start justify-start pt-0 px-0 pb-[542px] box-border gap-[38px] min-h-[1684px] max-w-full lg:pb-[352px] lg:box-border mq1050:pb-[229px] mq1050:box-border mq450:gap-[19px] mq450:pb-[149px] mq450:box-border">
            <div className="self-stretch rounded-2xl box-border flex flex-col items-start justify-start pt-px px-0 pb-[29px] relative gap-[18px] max-w-full z-[1] border-[2px] border-solid border-text-color-secondary">
              <div className="w-full h-[46px] absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-t-2xl rounded-b-none bg-gold-100" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
                  <div className="w-[598px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                    <div className="w-[135px] relative text-5xl leading-[36px] font-semibold font-montserrat text-gray-200 text-center flex items-center justify-center shrink-0 z-[2] mq450:text-lgi mq450:leading-[27px]">
                      Inclusions
                    </div>
                    <div className="relative text-5xl leading-[36px] font-semibold font-montserrat text-gray-200 text-center z-[2] mq450:text-lgi mq450:leading-[27px]">
                      Exclusions
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0.5 relative box-border z-[4] border-t-[2px] border-solid border-text-color-secondary" />
              </div>
              <div className="self-stretch h-[550px] relative rounded-2xl box-border hidden z-[2] border-[2px] border-solid border-text-color-secondary" />
              <div className="w-0.5 h-[calc(100%_+_2px)] absolute !m-[0] top-[0px] right-[461px] bottom-[-2px] box-border z-[2] border-r-[2px] border-solid border-text-color-secondary" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-[26px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[46px] max-w-full mq450:gap-[23px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[266px] max-w-full">
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Accommodations on a double sharing basis As per the
                          details given above.
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>MAP meal plan (Breakfast and Dinner) </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          NAC Innova (upto 6 pax) and NAC Tempo Traveller( from
                          6 to 12 pax) for all the sightseeing as per the
                          itinerary
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Arrival and departure transfer and all land transfers
                          according to itinerary 
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>Pick up at Leh airport and drop at Leh airport </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>Inner line permit </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>Driver allowance/toll/parking/road tax/fuel</li>
                      </ol>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-start gap-[24px] min-w-[271px] max-w-full">
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Air fare /train fare and all entry fees at sightseeing
                          spots 
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Monument and Museum entrance fees to be paid directly 
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Any kind of personal expenses, extra meals, starts and
                          drinks (alcoholic, mineral, aerated etc) 
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-0 box-border max-w-full">
                      <div className="flex-1 relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify inline-block max-w-full">
                        <ol className="m-0 font-inherit text-inherit pl-[21px]">
                          <li>Any kind of optional tours </li>
                        </ol>
                      </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Tips, insurance, laundry, phone calls, guide fee and
                          camera fees
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Services of vehicle on leisure days and after
                          finishing the sightseeing tour 
                        </li>
                      </ol>
                    </div>
                    <div className="self-stretch relative text-base leading-[140%] font-montserrat text-text-color-secondary text-justify">
                      <ol className="m-0 font-inherit text-inherit pl-[21px]">
                        <li>
                          Adventure activity costs (pony ride, camel ride,
                          rafting, paragliding etc) 
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-gainsboro-200 flex flex-row items-start justify-start py-[207px] px-[107px] box-border min-h-[554px] max-w-full mq1050:pl-[53px] mq1050:pr-[53px] mq1050:box-border mq450:py-[135px] mq450:px-5 mq450:box-border">
              <div className="h-[554px] w-[929px] relative rounded-2xl bg-gainsboro-200 hidden max-w-full" />
              <h3 className="m-0 w-[673px] relative text-17xl font-bold font-inria-serif text-black text-center flex items-center justify-center shrink-0 max-w-full z-[1] mq1050:text-10xl mq450:text-3xl">
                IMAGE
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[30px]">
            <div className="h-[42.9px] w-[13px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-[13px] h-[15.9px]"
                alt=""
                src="/group-11297.svg"
              />
              <img
                className="absolute top-[29.9px] left-[0px] w-[13px] h-[13px]"
                alt=""
                src="/group-11296.svg"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

TripContent.propTypes = {
  className: PropTypes.string,
};

export default TripContent;
