import { TripData } from './types';

export const TRIP_DATA: TripData = {
  title: "九州 櫻紗之旅",
  startDate: "2026-03-30",
  endDate: "2026-04-08",
  days: [
    {
      date: "2026-03-30",
      weekday: "Mon",
      title: "香港 - 福岡",
      items: [
        {
          time: "10:20",
          title: "香港國際機場 T1 出發",
          description: "香港航空 HX640",
          locations: [
            {
              name: "香港國際機場 T1",
              category: "flight",
              note: "HX640"
            }
          ]
        },
        {
          time: "15:00",
          title: "抵達福岡空港",
          description: "福岡機場站(機場線普通姪濱) > 天神站(11mins) > 步行約11分鐘 (¥260)",
          locations: [
            {
              name: "福岡空港",
              category: "transport",
              note: "機場線 (¥260)"
            }
          ]
        },
        {
          time: "17:00",
          title: "博多車站 + 快食拉麵 / 手信",
          description: "博多車站周邊美食與購物",
          locations: [
            {
              name: "il FORNO del MIGNON (MIGNON 博多店)",
              address: "福岡県福岡市博多区博多駅中央街1-1 博多駅JR",
              hours: "07:00 - 23:00",
              category: "food",
              note: "可頌麵包"
            },
            {
              name: "LeClerc 福岡車站可麗露",
              address: "福岡市博多區博多駅中央街1-1",
              category: "food"
            },
            {
              name: "AMANBERRY 博多阪急店",
              address: "福岡市博多区博多駅中央街1-1 博多阪急B1F",
              coordinates: "33° 35' 22.9459\" N 130° 25' 8.2355\" E",
              category: "shopping",
              note: "士多啤梨餅手信"
            },
            {
              name: "巧克力商店 博多の石畳",
              address: "福岡市博多区博多駅中央街1-1 アミュプラザ博多1F",
              coordinates: "33° 35' 23.5338\" N 130° 25' 9.2111\" E",
              category: "food",
              note: "朱古力蛋糕"
            }
          ]
        },
        {
          time: "18:00",
          title: "lyf天神福岡酒店 Check-in",
          description: "辦理入住手續",
          locations: [
            {
              name: "lyf天神福岡酒店",
              address: "Imaizumi, 1 Chome−2−13 3F, 中央區, 810-0021 福岡市",
              category: "hotel"
            }
          ]
        },
        {
          time: "18:30",
          title: "天神地下街美食巡禮",
          description: "天神地下街與周邊甜品",
          locations: [
            {
              name: "full full パンとワイン 天神",
              address: "福岡市中央区天神3-3-5 Full Full BLD 1F",
              coordinates: "33° 35' 18.6504\" N 130° 23' 38.4101\" E",
              hours: "10:00〜20:00 (星期二定休)",
              category: "food",
              note: "明太法包"
            },
            {
              name: "伊都きんぐ",
              address: "福岡市中央区天神2丁目地下1号 天神地下街東11番",
              coordinates: "33° 35' 14.4053\" N 130° 23' 53.9401\" E",
              hours: "10:00〜20:00/22:00 (不定休)",
              category: "food",
              note: "士多啤梨甜品"
            },
            {
              name: "南国フルーツパーラー",
              address: "福岡県福岡市中央区天神2-5-35 岩田屋本店地下1階",
              coordinates: "33° 35' 12.7349\" N 130° 23' 46.693\" E",
              hours: "10:00〜20:00",
              category: "food",
              note: "芭菲"
            },
            {
              name: "Qu'il fait bon キルフェボン 福岡",
              address: "福岡市中央区天神2-4-11 パシフィーク天神 1F",
              coordinates: "33° 35' 9.9946\" N 130° 23' 51.6858\" E",
              hours: "11:00-18:00",
              category: "food",
              note: "水果派"
            },
            {
              name: "夜パフェ専門店 Parfaiteria beL",
              address: "福岡市中央区今泉2-4-36 TIO今泉2F",
              coordinates: "33° 35' 4.353\" N 130° 23' 43.3982\" E",
              hours: "18:00〜0:00",
              category: "food",
              note: "芭菲"
            }
          ]
        },
        {
          time: "19:00",
          title: "舞鶴公園 + 大濠公園 夜櫻祭",
          description: "[福岡城櫻花祭2026] + 光影偽teamlab",
          locations: [
            {
              name: "舞鶴公園",
              hours: "09:00-22:00",
              category: "sightseeing",
              note: "夜櫻祭"
            },
            {
              name: "大濠公園",
              category: "sightseeing",
              note: "光影展覽"
            }
          ]
        },
        {
          time: "21:15",
          title: "晚飯：博多炉端 魚男",
          description: "已預約 (Booked)",
          locations: [
            {
              name: "博多炉端 魚男",
              address: "福岡市中央区今泉1丁目4-23",
              coordinates: "33° 35' 4.6601\" N 130° 23' 50.5478\" E",
              hours: "11:00-14:30; 17:00-23:00",
              category: "food"
            }
          ]
        },
        {
          time: "22:00",
          title: "返回酒店休息",
          description: "買定聽日早餐＋午餐 士多啤梨",
          locations: [
            {
              name: "lyf天神福岡酒店",
              category: "hotel"
            }
          ]
        }
      ]
    },
    {
      date: "2026-03-31",
      weekday: "Tue",
      title: "宮崎高千穗一日遊",
      items: [
        {
          time: "06:45",
          title: "酒店出發",
          description: "lyf 天神福岡出發，步行約8分鐘至天神南站，乘車至博多站(4分鐘，East4出站)",
          locations: [
            {
              name: "lyf天神福岡酒店",
              category: "hotel"
            }
          ]
        },
        {
          time: "07:45",
          title: "宮崎一日遊 (Klook)",
          description: "集合點：LAWSON 福岡東方飯店店。要買乾糧，未必有時間食。11/1已買，48小時前免費取消。",
          locations: [
            {
              name: "LAWSON 福岡東方飯店店",
              address: "集合點",
              category: "transport",
              mapUrl: "https://maps.app.goo.gl/T1hXEgxdqQLrVPws7"
            },
            {
              name: "高千穗峽",
              category: "sightseeing"
            },
            {
              name: "高千穗峽遊船",
              category: "sightseeing"
            },
            {
              name: "高千穗峽小火車",
              category: "sightseeing"
            },
            {
              name: "天安河原",
              category: "sightseeing"
            }
          ]
        },
        {
          time: "18:30",
          title: "返回福岡",
          description: "預計抵達福岡，準備晚間行程",
          locations: [
            {
              name: "福岡",
              category: "transport"
            }
          ]
        },
        {
          time: "19:00",
          title: "博多運河城 & 天神地下街",
          description: "晚間逛街購物",
          locations: [
            {
              name: "博多運河城",
              category: "shopping"
            },
            {
              name: "天神地下街",
              category: "shopping"
            }
          ]
        },
        {
          time: "19:30",
          title: "晚餐：博多水炊鍋専門 橙",
          description: "預約：IDHD9HVN (prehold credit card: 8300yen, 餐廳另付)。預計 21:00 離開。",
          locations: [
            {
              name: "博多水炊鍋専門 橙 Daidai",
              address: "1-8-14 Otemon, Fukuoka-shi Chuo-ku, Fukuoka 810-0074",
              category: "food",
              note: "已預約 IDHD9HVN"
            }
          ]
        },
        {
          time: "22:00",
          title: "返回酒店休息",
          description: "預計 24:00 睡覺",
          locations: [
            {
              name: "lyf天神福岡酒店",
              category: "hotel"
            }
          ]
        }
      ]
    },
    {
      date: "2026-04-01",
      weekday: "Wed",
      title: "美野島櫻花拍攝 & 舞鶴公園",
      items: [
        {
          time: "07:00",
          title: "起床",
          description: "準備出發"
        },
        {
          time: "08:30",
          title: "出門前往美野島",
          description: "酒店到美野島約30-40分鐘 (預留1小時)",
          locations: [
            {
              name: "lyf天神福岡酒店",
              category: "hotel"
            }
          ]
        },
        {
          time: "09:30",
          title: "抵達美野島",
          description: "先自己周圍影相玩下",
          locations: [
            {
              name: "美野島",
              category: "sightseeing"
            }
          ]
        },
        {
          time: "10:00",
          title: "美野島櫻花拍攝",
          description: "10:00-11:00 拍攝 (有需要可加時至12:00)。備註：陰/雨天需備透明遮，注意鞋子防濕。若無櫻花需準備後備景點。",
          locations: [
            {
              name: "美野島",
              category: "sightseeing",
              note: "雨天備案：透明遮、防水鞋"
            }
          ]
        },
        {
          time: "13:00",
          title: "午餐 & 返回酒店換衫",
          description: "Lunch + 返酒店換衫",
          locations: [
            {
              name: "lyf天神福岡酒店",
              category: "hotel"
            }
          ]
        },
        {
          time: "15:00",
          title: "舞鶴公園 & 大濠公園",
          description: "舞鶴公園(夜櫻祭)[福岡城櫻花祭2026] + 大濠公園(光影偽teamlab)",
          locations: [
            {
              name: "舞鶴公園",
              category: "sightseeing",
              note: "福岡城櫻花祭2026"
            },
            {
              name: "大濠公園",
              category: "sightseeing",
              note: "光影偽teamlab"
            }
          ]
        },
        {
          time: "19:00",
          title: "Shopping",
          description: "附近行街 Shopping",
          locations: [
            {
              name: "天神/大濠周邊",
              category: "shopping"
            }
          ]
        },
        {
          time: "19:45",
          title: "準備前往晚餐",
          description: "出發前往西新初喜本店"
        },
        {
          time: "20:30",
          title: "晚餐：西新初喜本店",
          description: "已預約 (預約ID: PL772693058997aba)",
          locations: [
            {
              name: "西新初喜本店",
              address: "福岡市早良区西新５丁目６−30 初喜ビル 2階",
              coordinates: "33° 38' 12.1729\" N 130° 21' 32.9281\" E",
              category: "food",
              note: "預約ID: PL772693058997aba"
            }
          ]
        }
      ]
    },
    {
      date: "2026-04-02",
      weekday: "Thu",
      title: "由布院一日遊",
      items: [
        {
          time: "08:15",
          title: "酒店出發前往博多",
          description: "lyf 天神福岡 > 博多 (預計 08:49 抵達)",
          locations: [
            {
              name: "lyf天神福岡酒店",
              category: "hotel",
              mapUrl: "https://maps.app.goo.gl/NeyEimLtNtejoHjB7"
            }
          ]
        },
        {
          time: "09:17",
          title: "乘搭由布院之森 (去程)",
          description: "博多出發 (觀光列車 TBC0302 ROUND TRIP)，預計 11:31 抵達由布院",
          locations: [
            {
              name: "博多車站",
              category: "transport"
            }
          ]
        },
        {
          time: "11:31",
          title: "抵達由布院",
          description: "由布院景點：馬車、金鱗湖、大街",
          locations: [
            {
              name: "金鱗湖",
              category: "sightseeing"
            },
            {
              name: "湯之坪街道 (大街)",
              category: "sightseeing"
            }
          ]
        },
        {
          time: "12:00",
          title: "午餐：由布まぶし 心 駅前支店",
          description: "豐後牛、鰻魚及地雞 釜飯三吃 [可以預訂]",
          locations: [
            {
              name: "由布まぶし 心 駅前支店",
              address: "大分県由布市湯布院町川北5-3 2F",
              hours: "11:00-15:30",
              category: "food"
            }
          ]
        },
        {
          time: "13:30",
          title: "由布院甜品美食巡禮",
          description: "布丁們 & 甜品、炸雞",
          locations: [
            {
              name: "Milch",
              category: "food",
              note: "半熟起司蛋糕"
            },
            {
              name: "B-speak",
              category: "food",
              note: "生乳蛋糕捲"
            },
            {
              name: "花麴菊家",
              category: "food",
              note: "布丁銅鑼燒"
            },
            {
              name: "鞠智",
              category: "food",
              note: "銅鑼燒"
            },
            {
              name: "HANIPOTE 由布院店",
              category: "food",
              note: "烤蕃薯 ＆ 蕃薯烤布蕾"
            },
            {
              name: "湯布珈琲",
              category: "food",
              note: "湯布布丁"
            },
            {
              name: "中津からあげ吉吾",
              category: "food",
              note: "炸雞"
            }
          ]
        },
        {
          time: "17:17",
          title: "乘搭由布院之森 (回程)",
          description: "由布院出發，預計 19:27 抵達博多",
          locations: [
            {
              name: "由布院車站",
              category: "transport"
            }
          ]
        },
        {
          time: "19:27",
          title: "抵達博多",
          description: "福岡 (晚上) (執細/大gip？)"
        },
        {
          time: "20:00",
          title: "晚餐：博多もつ鍋 やま中 博多店",
          description: "牛腸鍋 Menu (已預約 ID: FED4Z9)",
          locations: [
            {
              name: "博多もつ鍋 やま中 博多店",
              address: "福岡市博多区博多駅東2-4-6ハカタベビル2F",
              coordinates: "33° 35' 21.9138\" N 130° 25' 14.7605\" E",
              category: "food",
              note: "預約ID: FED4Z9"
            }
          ]
        }
      ]
    },
    {
      date: "2026-04-03",
      weekday: "Fri",
      title: "豪斯登堡主題樂園",
      items: [
        {
          time: "08:39",
          title: "乘搭豪斯登堡號",
          description: "博多出發，預計 10:22 抵達豪斯登堡車站",
          locations: [
            {
              name: "博多車站",
              category: "transport"
            }
          ]
        },
        {
          time: "10:22",
          title: "抵達豪斯登堡 & 酒店寄存行李",
          description: "豪斯登堡車站步行約5分鐘至 JR豪斯登堡大倉酒店",
          locations: [
            {
              name: "JR豪斯登堡大倉酒店",
              address: "10 Huis Ten Bosch Machi, Sasebo, Nagasaki 859-3296, Japan",
              category: "hotel"
            }
          ]
        },
        {
          time: "11:00",
          title: "豪斯登堡：迎賓區 & 娛樂設施城",
          description: "【迎賓區】泰迪熊王國、運河遊艇。\n【娯樂設施城】天際巡航(30m)、三層旋轉木馬、洪水來襲冒險館(15m)、VR極限人體彈弓(12m)、***VR激流漂流(10m)、深海任務(30m)、巧克力伯爵館。",
          locations: [
            {
              name: "迎賓區",
              category: "sightseeing",
              note: "泰迪熊王國, 運河遊艇"
            },
            {
              name: "娯樂設施城",
              category: "sightseeing",
              note: "天際巡航, VR激流漂流等"
            }
          ]
        },
        {
          time: "13:00",
          title: "午餐時間 (園內選擇)",
          description: "可選：Pinoccio (Pizza/海鮮), 噴泉漢堡 (佐世保漢堡), 多多多洋食 (土耳其飯)",
          locations: [
            {
              name: "Pinoccio",
              category: "food",
              hours: "11:00-21:00",
              note: "德姆特倫高塔免費展望台附近 (pizza & seafood)"
            },
            {
              name: "噴泉漢堡",
              category: "food",
              hours: "11:00-21:00",
              note: "佐世保漢堡"
            },
            {
              name: "多多多洋食",
              category: "food",
              hours: "11:00-20:30",
              note: "長崎發源的土耳其飯"
            }
          ]
        },
        {
          time: "14:30",
          title: "豪斯登堡：光之幻想城 & 其他園區",
          description: "【光之幻想城】海洋(20m)、萬花(15m)、運動(5/15m)、***鐘樓(10m)、藝術(10m,可略)。\n【阿姆斯特丹城】玻璃工藝、釣魚大冒險(10m)。\n【藝術花園】摩天輪。\n【港口城】瓷器博物館。\n【豪斯登堡宮殿】宮殿及美術館。\n【高塔城】德姆特倫高塔。",
          locations: [
            {
              name: "光之幻想城",
              category: "sightseeing",
              note: "海洋, 萬花, 運動, 鐘樓, 藝術"
            },
            {
              name: "阿姆斯特丹城",
              category: "sightseeing",
              note: "玻璃工藝博物館, 釣魚大冒險"
            },
            {
              name: "藝術花園 & 港口城",
              category: "sightseeing",
              note: "摩天輪, 瓷器博物館"
            },
            {
              name: "豪斯登堡宮殿 & 高塔城",
              category: "sightseeing",
              note: "宮殿, 美術館, 德姆特倫高塔"
            }
          ]
        },
        {
          time: "19:00",
          title: "晚餐時間 & 夜景",
          description: "園內晚餐，欣賞豪斯登堡夜景",
          locations: [
            {
              name: "豪斯登堡",
              category: "sightseeing",
              note: "夜景"
            }
          ]
        },
        {
          time: "22:00",
          title: "返回酒店休息",
          description: "睡前準備：執細gip準備聽日去鹿兒島",
          locations: [
            {
              name: "JR豪斯登堡大倉酒店",
              category: "hotel",
              note: "執細gip to鹿兒島 before sleep"
            }
          ]
        }
      ]
    },
    {
      date: "2026-04-04",
      weekday: "Sat",
      title: "行程規劃中...",
      items: []
    },
    {
      date: "2026-04-05",
      weekday: "Sun",
      title: "行程規劃中...",
      items: []
    },
    {
      date: "2026-04-06",
      weekday: "Mon",
      title: "行程規劃中...",
      items: []
    },
    {
      date: "2026-04-07",
      weekday: "Tue",
      title: "行程規劃中...",
      items: []
    },
    {
      date: "2026-04-08",
      weekday: "Wed",
      title: "福岡 - 香港",
      items: []
    }
  ]
};
