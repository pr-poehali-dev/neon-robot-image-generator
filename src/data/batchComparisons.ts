export interface BatchComparison {
  goal: string;
  prompt: string;
  thumb: string;
  images: { zimage: string; ideogram: string };
}

export const batchComparisons: BatchComparison[] = [
  {
    goal: "В орловском крае: крепостная деревня конца XIX века, вид…",
    prompt: "Фотореалистичный кинематографический кадр в орловском крае: крепостная деревня конца XIX века, вид из-за кустов на рассвете. На переднем плане деревянная телега у плетня, рядом брошенная цепь и замок на воротах усадьбы; в стороне просёлочная дорога расходится на две колеи: тёмная грязная к оврагу и светлая к лесной тропе. Вдали тёмный барский дом и низкая церковь на горизонте, влажная трава после росы. Низкий ракурс, диагональная композиция, контрастное мягкое утреннее освещение, сдержанная палитра охра, серо-зелёный, коричневый, холодные синие тени. 8K, резкая фокусировка, высокая детализация, без людей, без текста, без символов и надписей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/000_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/000_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/000_ideogram.webp"
    }
  },
  {
    goal: "Школьной парты в российской аудитории: на деревянной…",
    prompt: "Фотореалистичное 8K крупное план-изображение школьной парты в российской аудитории: на деревянной поверхности лежат учебник русского языка с закладкой, чистый бланк с клетками и несколькими красными штрихами отметок проверки (без букв и слов), рядом ручка с колпачком, точилка и тетрадь. Слева частично в кадре размытая школьная доска. Перспектива сверху под углом 45°, центр композиции на бланке и отметках. Мягкий дневной свет из окна, спокойная палитра синих и серых тонов с красным акцентом. Резкая фокусировка, высокая детализация, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/001_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/001_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/001_ideogram.webp"
    }
  },
  {
    goal: "В современном серверном помещении в Москве, пасмурный день…",
    prompt: "Фотореалистичная сцена в современном серверном помещении в Москве, пасмурный день, легкий туман за окном. На деревянном столе из светлой березы лежат папки с файловыми пластинами и аккуратные стопки дисков без маркировок; над ними в воздухе мягко светятся бесшовные узлы-серверы и световые кабели, соединяющие папки по всей глубине кадра, создавая образ распределенной системы. Камера под углом 3/4, широкоугольный вид, глубина резкости на переднем плане. Холодная голубовато-бирюзовая палитра, мягкое контровое освещение. Сверхдетально, резкость, 8K, sharp focus, реализм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/002_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/002_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/002_ideogram.webp"
    }
  },
  {
    goal: "В стерильном кабинете противотуберкулёзной профилактики в…",
    prompt: "Фотореалистичная сцена-натюрморт в стерильном кабинете противотуберкулёзной профилактики в России: на столе из нержавеющей стали закрытый флакон с биоматериалом без маркировки, одноразовый респиратор с клапаном, нитриловые перчатки, дезинфицирующие салфетки, небольшой контейнер для утилизации, рядом микроскоп в размытом фоне. За стеклянной перегородкой видны вентиляционные решётки и приточно-вытяжной короб. Вечер, мягкий рассеянный свет, прохладная цветовая палитра (сталь, белый, синий). Ракурс сверху под углом 30°, резкий фокус на предметах, высокодетализированность, 8K, sharp focus, без текста, без диаграмм, без людей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/003_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/003_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/003_ideogram.webp"
    }
  },
  {
    goal: "В интерьере российской университетской библиотеки: на…",
    prompt: "Фотореалистичная сцена в интерьере российской университетской библиотеки: на деревянном столе раскрытый учебник с закладками, рядом стопка новых книг, на переднем плане аккуратно разложены монеты и банковский бланк без надписей, которые частично лежат на страницах, символизируя окупаемость образования. Тёплый рассеянный свет из высоких окон, мягкие тени, легкая пыль в лучах. Перспектива на уровне стола, композиция по диагонали: монеты слева, книга центр, книги справа. Резкий фокус, высокая детализация, 8K, 50mm, кинематографичный реализм, без текста и диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/004_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/004_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/004_ideogram.webp"
    }
  },
  {
    goal: "В интерьере российской квартиры: деревянная дверь с…",
    prompt: "Фотореалистичная сцена в интерьере российской квартиры: деревянная дверь с приоткрытым проёмом, за дверью мягкий тёплый свет; на столе распадающаяся белая нить привязанности, рядом потускневший семейный фотоальбом с выдвинутой фотографией; в центре — тканевое полотно, которое заново сшивают тонкими стежками (восстановление: безопасность, воспоминание, интеграция). Вид сверху под углом 45°, композиция треугольником: разрыв слева, свет справа, полотно по центру. Холодные серо-синие оттенки у разрыва, тёплые янтарные у двери. Резко, высокая детализация, 8K, sharp focus, мягкое драматическое освещение, без людей и без текста, без диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/005_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/005_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/005_ideogram.webp"
    }
  },
  {
    goal: "Create a highly detailed 3D illustration in a cheerful…",
    prompt: "Create a highly detailed 3D illustration in a cheerful, kid-friendly photoreal style (Pixar-like proportions, smooth materials) for a Russian language lesson mood: warm morning sunlight from the upper left, soft shadows, bright but gentle palette (sunny yellows, tiger-orange accents, clean sky blues, umbrella red). Scene for S–U: show a cozy Russian indoor playroom corner near a window with light wooden floorboards. In the foreground, a bright yellow sun-shaped beach toy sits half-buried in a small pile of pale sand on a low rug; to the right, a friendly tiger plush figure is visible from the chest up, with distinct orange-and-black stripes and a soft fabric texture, posed as if “looking” toward the sun; on the left edge, a closed red umbrella with a curved handle rests diagonally, its fabric showing subtle stitching and raindrop-like speckles (not real rain). Composition: extreme close-up crop focusing on the sun toy and the umbrella canopy rim, with the tiger plush blurred slightly in the depth-of-field background to keep a clear visual hierarchy. Camera angle: slightly low angle, lens near the rug level, making the umbrella canopy feel large and inviting. Lighting: sunbeam highlights on the sun toy and glossy specular highlights on the umbrella fabric; ambient fill light keeps shadows soft. Background: simple, uncluttered, with a faint view of a Russian-style framed landscape picture on the wall (no readable text) and a small shelf with harmless decor (a ball and a block), kept out of focus. Atmosphere: playful and calm, like the end of a fun alphabet segment. No letters, no words, no numerals; only concrete objects: sun toy, tiger plush, and umbrella. Ensure sharp focus on the primary objects, highly detailed textures, 8K clarity, crisp edges.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/006_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/006_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/006_ideogram.webp"
    }
  },
  {
    goal: "Крупный план рабочего места в школьной библиотеке в вечернее…",
    prompt: "Фотореалистичный крупный план рабочего места в школьной библиотеке в вечернее время: на деревянном столе открытый учебник русского языка с чистыми полями и выделенными цветными маркерами фрагментами без надписей, рядом ручка и лупа, листы с аккуратными кругами и стрелками-подсказками; на бумаге отпечатаны видимые точка, запятая и скобки как штампы без текста, а также карточки с графическими иконками логики (схематичный пример в виде линий и связок). Мягкий рассеянный свет из окна, верхняя перспектива, композиция по диагонали, резкий фокус, палитра сдержанная (синий, серый, кремовый). 8K, высокая детализация, без людей, без текста и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/007_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/007_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/007_ideogram.webp"
    }
  },
  {
    goal: "Русской школьной столовой в дневное время, нейтральная…",
    prompt: "Фотореалистичная сцена русской школьной столовой в дневное время, нейтральная пасмурная погода за окнами. На переднем плане аккуратно разложены порционные тарелки, контейнеры с крупами, овощами и мясом, мерные ложки, весы, коробки с бессловесными цветными ярлыками. Рядом закрытая холодильная витрина с прозрачными полками и термометром без цифр, а также поднос с готовым блюдом для проверки свежести. Вид с уровня столешницы под углом 30 градусов, мягкий рассеянный свет, теплые бежево-зеленые тона, порядок и чистота, без людей и без текста. 8K, резкость, высокая детализация.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/008_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/008_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/008_ideogram.webp"
    }
  },
  {
    goal: "В школьном кабинете в тёплое осеннее утро: деревянный стол с…",
    prompt: "Фотореалистичная сцена в школьном кабинете в тёплое осеннее утро: деревянный стол с аккуратно разложенными книгами на русском, открытым блокнотом без надписей, ручкой, карандашом, закладкой и лупой, которой проверяют страницу. На заднем плане слегка размыто окно с пасмурным небом и каплями дождя на стекле, рядом — аккуратная композиция осенних листьев и рюкзак. Камера на уровне стола, крупный план с глубиной резкости, мягкий рассеянный свет, спокойная палитра охра, голубой, зелёный. Резкость 8K, без людей, без текста, без графиков, сверхдетализация, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/009_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/009_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/009_ideogram.webp"
    }
  },
  {
    goal: "В школьной библиотеке в конце дня, осень в России: деревянный…",
    prompt: "Фотореалистичная сцена в школьной библиотеке в конце дня, осень в России: деревянный стол у окна, стопка тетрадей без надписей, папка с файлами, школьный рюкзак, карандаш, компас и модельная шестерня на подложке, у стены — стеллаж с книгами в нейтральных корешках. Вид под углом 3/4, передний план резкий, фон слегка размытый. Тёплый рассеянный свет заката через окно создаёт ощущение смысла и практической пользы. Палитра: охра, приглушённый синий, зелёный. Качество 8K, sharp focus, без людей, без текста, без схем.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/010_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/010_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/010_ideogram.webp"
    }
  },
  {
    goal: "В кабинете администрации российской школы, вечер, пасмурная…",
    prompt: "Фотореалистичная сцена в кабинете администрации российской школы, вечер, пасмурная погода за окном, мягкий тёплый свет настольной лампы и общий рассеянный свет. На деревянном столе разложены: раскрытый блокнот без надписей, папка с файлами, стопка чистых бланков, лупа, ручка, канцелярские скрепки и маркеры для цветовой разметки без букв. Карточки разложены аккуратной последовательностью, создавая ощущение логики анализа; камера на уровне стола, диагональная композиция, крупный план с глубиной резкости. 8K, высокая детализация, резкость по всему кадру.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/011_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/011_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/011_ideogram.webp"
    }
  },
  {
    goal: "Начала учебного года в России: школьный двор у кирпичного…",
    prompt: "Фотореалистичная сцена начала учебного года в России: школьный двор у кирпичного здания школы, раннее утро, ясное сентябрьское небо, лёгкий прохладный воздух, небольшой дождь уже закончился, мокрый асфальт отражает свет. На переднем плане аккуратно стоят пустой рюкзак, тетрадь без надписей, расписной карандашный пенал, линейка и осенний букет из жёлтых листьев и георгинов в стеклянной вазе. Съёмка с уровня глаз, диагональная композиция, акцент на букете и канцелярии, мягкий контровой свет, тёплая палитра бежевый, синий, золотистый. 8K, высокая детализация, резкая фокусировка, естественные текстуры, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/012_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/012_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/012_ideogram.webp"
    }
  },
  {
    goal: "В школьной классной комнате в России: деревянная парта, на…",
    prompt: "Фотореалистичная сцена в школьной классной комнате в России: деревянная парта, на ней три предмета малых фольклорных жанров в виде зримых символов без надписей — стопка тонких книг с чистыми страницами, берестяной свиток с орнаментом, деревянная коробочка с карточками-вкладышами с узорами в стиле народного промысла. На подоконнике веточка берёзы и маленькая матрёшка, рядом самовар. Сбоку низкая перспектива, центр кадра на предметах, мягкий дневной свет через шторы, тёплая палитра охры и зелени, высокая резкость, 8K, sharp focus, детализация 3D-реализм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/013_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/013_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/013_ideogram.webp"
    }
  },
  {
    goal: "Широкий кадр на парковую спортивную трассу в долине Солнечная…",
    prompt: "Фотореалистичный широкий кадр на парковую спортивную трассу в долине Солнечная долина, Россия, день 19 сентября 2026, 12:00, солнечно, лёгкая дымка, чистый воздух. На переднем плане пустая стартовая зона: асфальтовая дорожка с разметкой без надписей, пустая стартовая арка, дорожные конусы. Вдоль трасы 4 пивных пит-стопа: деревянные столы, бочки, пивные краны без маркировок, стаканы с пенной шапкой, солёные крендели, коричневые ящики. Перспектива низкая, линии дороги ведут к горизонту. Тёплая палитра янтарный, золотой, коричневый, зелень. Резкость 8K, сверхдетализация, контрастный свет, без людей и текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/014_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/014_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/014_ideogram.webp"
    }
  },
  {
    goal: "Изображение в широком кадре: кабинет директора школы в…",
    prompt: "Фотореалистичное изображение в широком кадре: кабинет директора школы в России, деревянный стол, папка с документами без читаемых надписей, стопка правовых актов в коричнево-синей палитре, на переднем плане раскрытая папка с чистыми листами, на фоне — стеклянный шкаф с папками и гербовая символика без текста. Иерархия норм показана как несколько уровней папок, аккуратно разложенных ступенями. Мягкий дневной свет через окно, пасмурная погода, спокойная официальная атмосфера. Камера на уровне глаз под углом 15° сверху, резкий фокус. 8K, сверхдетализация, sharp focus, без людей, без графиков и схем, без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/015_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/015_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/015_ideogram.webp"
    }
  },
  {
    goal: "В учебном кабинете отделения в Москве, вечер, мягкая…",
    prompt: "Фотореалистичная сцена в учебном кабинете отделения в Москве, вечер, мягкая пасмурная погода за окнами. На деревянном столе аккуратно разложены: папка с плотными листами без надписей, блокнот, настольный календарь с пустыми клетками, стопка дипломов и благодарностей с нейтральными орнаментами, серебряная медаль, ручка и карандаш. Композиция по правилу третей, крупный план с легкого верхнего ракурса, передний план резкий, фон слегка размытый. Теплый рассеянный свет из окна, спокойная цветовая палитра сине-серые и бордовые акценты. 8K, высокая детализация, резкая фокусировка, без людей, без текста, без графиков и диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/016_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/016_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/016_ideogram.webp"
    }
  },
  {
    goal: "Cinematic photorealistic 8K image, warm Russian classroom…",
    prompt: "Cinematic photorealistic 8K image, warm Russian classroom daylight, soft shadows from the left, gentle haze for depth, highly detailed, sharp focus, mood: reflective clarity. Visualize “where awareness arises” by centering on a reflective still-life: a large circular blank hand mirror (silver rim, no inscriptions) sits on a dark slate classroom tray; the mirror reflects the game board in miniature, but without any people or readable text. In the foreground, three small blank acrylic question tiles (frosted edges, each with a different colored dot pattern only—no letters) are placed in a slight arc, and beside them rests a tiny folded paper “reflection card” that is completely empty. To show the transition from action to rule, include a game piece tray holding a single unmarked wooden rule-shaped token (a curved tablet form) and a separate set of blank fabric strips that look like “spoken actions,” arranged as if recently used. Composition: close-up with shallow depth of field; the mirror occupies the left-center, the three acrylic tiles are in the lower-right foreground sharp, and the reflected miniature game board appears softly in the mirror’s background. Camera angle: macro three-quarter view, slightly above tabletop height, cropped tightly so only the reflective elements and nearby props are visible. Lighting from the left produces crisp highlights on the mirror rim and soft falloff across the slate tray, emphasizing sensory detail: frosted acrylic, brushed metal, and matte fabric. Palette remains consistent: warm beige background tones, muted blue accents from the reflected border of the game board, and restrained colored dots (green/amber/blue) with no text-like marks. Ensure no on-image writing, no diagram lines, no speech bubbles with words, and no human figures—only tangible reflection cues that visually represent how careful questioning turns play into mindful language use.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/017_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/017_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/017_ideogram.webp"
    }
  },
  {
    goal: "В российской научной лаборатории: на металлическом оптическом…",
    prompt: "Фотореалистичная сцена в российской научной лаборатории: на металлическом оптическом столе под стеклянными крышками лежат пять отдельных образцов рентгеновской оптики — составная CRL-линза из микроскопических цилиндров, пучок капилляров, круглая зонная пластинка, пара зеркал KB на держателе и многослойное зеркальное покрытие на подложке. Сбоку мягко подсвечены рассеянным голубовато-фиолетовым рентгеновским светом для визуализации баланса энергии, размера пятна, потерь и длины рабочего отрезка, без каких-либо надписей. Перспектива на уровне стола, крупный план с легкой диагональной композицией, драматичный контровой свет, холодная сдержанная палитра сталь+сине-фиолетовый. 8K, резкий фокус, ultra-detailed, photorealistic, без людей и без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/018_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/018_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/018_ideogram.webp"
    }
  },
  {
    goal: "В современном офисе в Москве вечером: на деревянном столе…",
    prompt: "Фотореалистичная сцена в современном офисе в Москве вечером: на деревянном столе разложены компас, лупа над стопкой папок с чистыми страницами, аккуратная папка с образцами товаров без логотипов, рядом смартфон с абстрактными цветными пиктограммами без текста, чек на кассе и блестящий брелок-программа лояльности как символ длительной ценности. Солнечный свет из окна сбоку, мягкие тени, акцент на ощущение исследования и создания ценности. Перспектива под углом 30° сверху, композиция диагональными линиями. Стиль: 8K, sharp focus, реализм, мягкое контрастное освещение, высокая детализация.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/019_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/019_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/019_ideogram.webp"
    }
  },
  {
    goal: "В премиальной ресторанной кухне в Москве, вечер, мягкий…",
    prompt: "Фотореалистичный кадр в премиальной ресторанной кухне в Москве, вечер, мягкий рассеянный свет от теплых потолочных ламп и витрины, на переднем плане крупный план 3D-пищевого принтера: металлический узел аккуратно выдавливает темперированный шоколад и молочную глазурь в форму с декоративным гербом без букв и надписей. Рядом на мраморной столешнице — готовые шоколадные фигурки, мини-десертные элементы для торта, силиконовые подложки с гладкими текстурами и порциями. Перспектива 3/4, композиция по диагонали, резкость на деталях, глубина резкости. 8K, sharp focus, высокодетализированно.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/020_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/020_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/020_ideogram.webp"
    }
  },
  {
    goal: "В помещении мастерской кадетской школы: на светлом деревянном…",
    prompt: "Фотореалистичная сцена в помещении мастерской кадетской школы: на светлом деревянном столе аккуратно разложены сувенирные предметы без надписей — кожаный брелок с металлической эмблемой в виде щита, нашивка с геометрическим орнаментом, значок с стилизованным лавровым венком, тканевая лента и блокнот в строгой обложке. Мягкий дневной свет из окна слева, чистый фон с размытым стеллажом. Перспектива на уровне стола, композиция по диагонали, резкий фокус на переднем плане. Цвета: темно-синий, бордовый, серебро. Качество 8K, ultra-detailed, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/021_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/021_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/021_ideogram.webp"
    }
  },
  {
    goal: "В офисе сертификационного центра АО: на переднем плане папка…",
    prompt: "Фотореалистичная сцена в офисе сертификационного центра АО: на переднем плане папка с документами, печати на бланках и прозрачный пломбирующий контейнер, рядом металлическая пломба и образцы материалов в закрытых витринах: упаковка пищевых продуктов, флакон химреагента, строительный кирпич, фрагмент нефтехимической трубы и тканевый рулон. Фон: стеллажи с папками и нейтральный логистический коридор без надписей. Перспектива под углом 3/4, мягкий дневной свет из окна, сдержанная цветовая палитра сине-серые и белые тона. Крупная резкость, 8K, sharp focus, высокая детализация, без людей, без текста, без схем и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/022_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/022_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/022_ideogram.webp"
    }
  },
  {
    goal: "В офисе кадрового отдела в Москве, дневной пасмурный свет из…",
    prompt: "Фотореалистичная сцена в офисе кадрового отдела в Москве, дневной пасмурный свет из окна, на столе из светлого дерева разложены пять конкретных элементов системы компенсаций: папка с договором, калькулятор, конверт с печатью без надписей, стопка бланков с отверстиями, небольшая прозрачная коробка с монетами, рядом аккуратная металлическая ручка. Кадр снят с высоты 35 см, трехчетвертная перспектива, композиция диагональю к центру, глубина резкости на переднем плане. Палитра: серый, синий, натуральное дерево, приглушённый красный. 8K, резкий фокус, ультрадетализация, без людей, без текста и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/023_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/023_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/023_ideogram.webp"
    }
  },
  {
    goal: "В светлом школьном кабинете в пасмурный зимний день: круглый…",
    prompt: "Фотореалистичная сцена в светлом школьном кабинете в пасмурный зимний день: круглый стол из светлого дерева, вокруг разложены равные по размеру карточки без надписей, открытая книга с закладкой, мягкие фетровые игрушки разных фактур, разноцветные карандаши и пластилин, на стене нейтральный венок из сухих веток и бумажных сердец без текста. Композиция с уровня пола, низкая перспектива, акцент на симметрию и совместность: предметы образуют круг и ведут взгляд к центру стола. Тёплый мягкий рассеянный свет, спокойная гуманистическая палитра бежевый, молочный, синий, терракота. 8K, резкость по всей сцене, широкоугольный кадр, без людей, без текста, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/024_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/024_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/024_ideogram.webp"
    }
  },
  {
    goal: "В школьном холле в пасмурный осенний день: на дубовом столе…",
    prompt: "Фотореалистичная сцена в школьном холле в пасмурный осенний день: на дубовом столе лежат аккуратно разложенные тетради, атлас учебных предметов без надписей, папка с прозрачными файлами, связка канцелярии, бронзовая школьная медаль без гравировок и один светлый ученический ранец. На фоне через стеклянные двери видна входная группа типовой российской школы, мокрый асфальт отражает свет. Крупный план под углом 3/4, мягкий рассеянный свет, цветовая палитра сдержанные синий и бежевый с акцентами зелёного. Резкость на переднем плане, глубина резкости. 8K, sharp focus, photorealistic, без людей, без текста, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/025_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/025_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/025_ideogram.webp"
    }
  },
  {
    goal: "Кинематографичный кадр в серверной техкомнате на фоне…",
    prompt: "Фотореалистичный кинематографичный кадр в серверной техкомнате на фоне стальных стоек, ночное время, туманная дымка от охлаждения. На переднем плане крупный план материнской платы и микропроцессора с сияющими трассами, рядом роботизированная манипуляторная рука с кабельными жгутами и датчиками, справа — геймпад как объект реквизита, без логотипов. Перспектива на уровне деталей, диагональная композиция, направленный холодный свет от светодиодных ламп и мягкие отражения на металле. 8K, сверхдетально, резкий фокус, реалистичные материалы.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/026_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/026_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/026_ideogram.webp"
    }
  },
  {
    goal: "В школьном кабинете, вечер, мягкий рассеянный свет из окна…",
    prompt: "Фотореалистичная сцена в школьном кабинете, вечер, мягкий рассеянный свет из окна: на деревянном столе раскрытый словарь с размытыми строками без читаемого текста, рядом тетрадь в клетку, карандаш и кожаный портфель. У правой стороны стола аккуратно разложены три карточки с пустыми рамками (без букв), между ними яблоко как символ аппетита и открытая книга как символ библиотеки. Крупный план под углом 3/4, композиция диагональю, резкий фокус на словарь и тетрадь, спокойная гамма сине-зелёных и коричневых тонов, 8K, sharp focus, без людей, без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/027_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/027_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/027_ideogram.webp"
    }
  },
  {
    goal: "Сцена: на деревянной школьной парте в кабинете литературы…",
    prompt: "Фотореалистичная сцена: на деревянной школьной парте в кабинете литературы лежит открытая книга без видимого текста, рядом аккуратно стопка тетрадей в клетку, карандаш и линейка, на заднем плане распахнутое окно с видом на осенний двор и берёзы. Широкоугольная перспектива с уровня парты, композиция по правилу третей, книга в центре кадра. Мягкий дневной свет, тёплая цветовая палитра (охра, бежевый, приглушённый зелёный), лёгкие блики на страницах. Резкость по всему переднему плану, ultra-detailed, 8K, sharp focus, без людей и любых надписей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/028_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/028_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/028_ideogram.webp"
    }
  },
  {
    goal: "Сцена: крупный план керамического и электролитического…",
    prompt: "Фотореалистичная сцена: крупный план керамического и электролитического конденсаторов на печатной плате внутри металлического корпуса, рядом кабельные разъёмы и силовые провода, на заднем плане размытый сельхозагрегат в мастерской. Ночь, мягкий рассеянный свет от ламп дневного света, лёгкие блики на металле и лаке, тонкие ореолы холодного свечения на кромках как визуальный намёк на накопление заряда без графиков и формул. Композиция по диагонали, перспектива под углом 30°, резкий фокус на конденсаторах. 8K, sharp focus, photorealistic, детальная фактура, без людей и надписей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/029_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/029_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/029_ideogram.webp"
    }
  },
  {
    goal: "Кадр: двор и вход в школьное здание в городе Беслан, серое…",
    prompt: "Фотореалистичный кадр: двор и вход в школьное здание в городе Беслан, серое пасмурное утро, мелкий дождь, мокрый асфальт; на ступенях и у ограды аккуратно выложены венки из еловых веток, красно-белые гвоздики, бумажные цветы, горящие свечи в стеклянных стаканах, рядом детские игрушки без лиц и надписей. Широкий план с низкой точки, композиция по диагонали к центральному входу, мягкий драматичный свет от свечей на фоне холодного неба. Высокая детализация, 8K, резкий фокус.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/030_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/030_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/030_ideogram.webp"
    }
  },
  {
    goal: "Реализм: двор у дома культуры ТОС Еловский в России, дневной…",
    prompt: "Фотографический реализм: двор у дома культуры ТОС Еловский в России, дневной мягкий солнечный свет после легкой облачности. На переднем плане круг из детских игровых элементов без людей: мелки на асфальте с нарисованным солнцем, мяч у входа в беседку, деревянные кубики и настольная игра на уличном столе. Рядом видны следы семейной активности: аккуратно разложенные поделки из бумаги, вышитая салфетка, вязаные пледы, чайный сервиз на столе, пустые стулья. Камера на уровне глаз, широкий план, теплые цвета бежевый, зеленый, голубой. Сверхдетально, 8K, резкость по всему кадру. Без текста, без людей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/031_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/031_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/031_ideogram.webp"
    }
  },
  {
    goal: "В степи Казахстана у современного экологического поста…",
    prompt: "Фотореалистичная сцена в степи Казахстана у современного экологического поста мониторинга: на переднем плане металлическая метеостанция с датчиками ветра и воздуха, небольшой контейнер с панелями и кабелями, рядом автономный датчик качества воды у мелкого канала. На заднем плане в легкой дымке видна традиционная юрта и березки у низкого берега реки, облачное утро без осадков. Широкоугольный ракурс с уровня земли, правило третей, мягкий рассеянный свет. Палитра: сдержанные зеленые, песочные, серые тона. 8K, резкий фокус, высокая детализация, без людей, без текста, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/032_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/032_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/032_ideogram.webp"
    }
  },
  {
    goal: "В процедурной медицинского учреждения России, дневной свет из…",
    prompt: "Фотореалистичная сцена в процедурной медицинского учреждения России, дневной свет из окна. На переднем плане крупным планом: запечатанные флаконы с дезсредствами с четкими этикетками без текста, пластиковые контейнеры с крышками, маркировочные наклейки-идентификаторы, мерный стакан и одноразовые перчатки; рядом закрытая емкость для приготовления раствора с защитной крышкой, распылитель с снятой головкой, чистая и отдельная зона для концентраций. Композиция по диагонали, угол съемки 3/4 сверху, мягкое рассеянное освещение, спокойная строгая цветовая палитра белый, синий, серый. Фокус на предметах, 8K, резкость, высокая детализация, без людей, без текста, без диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/033_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/033_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/033_ideogram.webp"
    }
  },
  {
    goal: "На крытом скейт-парке в Москве вечером: круглая площадка с…",
    prompt: "Фотореалистичная сцена на крытом скейт-парке в Москве вечером: круглая площадка с разметкой из крашеного бетона, небольшая фанерная рампа и поручень для безопасного подводящего этапа, рядом лежит сноуборд/скейт с надетым защитным шлемом и наколенниками на стойке, вокруг — мягкие маты и маркировочные конусы без надписей. Кадр широкоугольный, низкая точка съемки, камера по дуге, чтобы подчеркнуть идею вращения фронтсайдом. Тёплый рассеянный свет прожекторов, холодные тени, палитра синие и серые оттенки с акцентом оранжевого инвентаря. Резкость по переднему плану, 8K, сверхдетализация, sharp focus, без людей и без текста, без схем.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/034_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/034_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/034_ideogram.webp"
    }
  },
  {
    goal: "Внутри холла российской школы в дневное время: на светлом…",
    prompt: "Фотореалистичная сцена внутри холла российской школы в дневное время: на светлом столе аккуратно разложены ноутбук и смартфон, рядом папка с печатными документами и школьный буклет, на стенде видны без надписей иконки новостей и медиаконтента, рядом аккуратно размещены микрофон и камера для школьного медиацентра. За спинами — окна с пасмурно-ясной погодой и мягким светом, ведущим линии к центру композиции. Перспектива с уровня глаз, центральная симметрия, тёплая нейтральная цветовая палитра, мягкое контровое освещение. 8K, сверхдетализация, резкий фокус, без людей, без текста и без любых символов, только визуальные намёки на коммуникацию и документы.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/035_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/035_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/035_ideogram.webp"
    }
  },
  {
    goal: "Природы в России: широкая река с чистой водой, идущий по…",
    prompt: "Фотореалистичная сцена природы в России: широкая река с чистой водой, идущий по берегу ветер в виде легкой ряби, колосья пшеницы на переднем плане и молодые побеги с видимыми корнями, уходящими в темную плодородную почву; рядом слой опавшей листвы, насекомые на макроскопическом уровне (без людей). Вид с уровня земли под углом 30°, горизонт в третях кадра. Мягкий дневной свет на закате, теплые зеленые и золотистые оттенки, высокая резкость. Ультрадетализация, 8K, sharp focus, естественные текстуры, широкоугольный кадр, без текста и символов.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/036_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/036_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/036_ideogram.webp"
    }
  },
  {
    goal: "В учебной аудитории университета в Москве вечером: на…",
    prompt: "Фотореалистичная сцена в учебной аудитории университета в Москве вечером: на деревянном столе стоит стеклянный глобус с подсвеченными континентами, вокруг него — четыре одинаковые фарфоровые чаши с мягким янтарным свечением, в каждой лежит миниатюрный металлический артефакт международной торговли (монета, ключ-талисман, чеканная пластина, печать на сургуче) без надписей. Крупный план под углом 3/4, композиция по диагонали, глобус в центре, четыре чаши образуют круг. Мягкий контровой свет, сине-серебристая палитра с янтарными бликами. 8K, резкость по всему кадру, sharp focus, без текста, без диаграмм, без людей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/037_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/037_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/037_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic 3D medical visualization in a dark, modern…",
    prompt: "Photorealistic 3D medical visualization in a dark, modern Moscow-style laboratory (no people), with cool blue and subtle teal rim lighting coming from the upper left and soft volumetric haze. Central subject for “Двойная мишень”: two different receptor gateways made of translucent glass-like membranes, positioned back-to-back like twin doors in a shallow depth-of-field. From each gateway, a distinct set of glowing molecular “keys” approaches—one set in warm amber light and the other in crisp emerald—spiraling toward their respective receptor sites without touching each other. The two receptor pathways visually imply synergy through coordinated motion: the amber keys and emerald keys converge simultaneously at separate docking pockets, creating two paired luminous “contact halos” that bloom and fade rhythmically. Composition: close-up, slightly off-center, with the left receptor larger in frame and the right receptor receding, creating a strong diagonal. Camera angle: macro perspective at 30 degrees, lens at near-focus on the docking pocket, shallow depth of field so background lab tools become abstract bokeh. Palette: deep navy, teal, amber, and emerald accents, with gentle specular highlights on the membrane surfaces. Lighting direction consistent across the slide: upper-left key light, soft fill from below right, subtle backlight rim to separate the glowing molecules from the background. Technical quality: ultra-sharp details on the membrane texture and molecular glow, highly detailed 8K look, crisp edges with realistic bloom. No text, no diagrams, no labels, and no human figures—only the twin receptor membranes, glowing molecular keys, and atmospheric lab depth cues.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/038_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/038_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/038_ideogram.webp"
    }
  },
  {
    goal: "На столе в школьной лаборатории: деревянная поверхность, на…",
    prompt: "Фотореалистичная сцена на столе в школьной лаборатории: деревянная поверхность, на переднем плане красочные натуральные фрукты и овощи (апельсин, яблоко, морковь), рядом прозрачные стеклянные баночки с водой и осадками минеральных солей, маленькая миска с крупой и хлебным зерном, внизу пластиковые капельницы с каплями витаминов, без маркировок. Вид с уровня стола под углом 30 градусов, широкая композиция треугольником к центру. Мягкий дневной свет из окна, теплые бежево-зеленые тона. Резкая фокусировка, 8K, высокая детализация, без людей, без текста, без схем.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/039_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/039_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/039_ideogram.webp"
    }
  },
  {
    goal: "В учебной аудитории, вечерний рассеянный свет через окно, на…",
    prompt: "Фотореалистичная сцена в учебной аудитории, вечерний рассеянный свет через окно, на темном деревянном столе по центру разложены три артефакта эволюции: полированный кусок магнетита, рядом старинный компас с бронзовым корпусом и видимой магнитной иглой, далее современный навигационный прибор с экраном без каких-либо надписей и иконок. Снимок с перспективы 3/4 сверху, аккуратная треугольная композиция, легкие блики на металле, мягкие тени, спокойная палитра сине-зеленых и янтарных тонов. Высокая детализация, резкий фокус, 8K, 50mm, shallow depth of field.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/040_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/040_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/040_ideogram.webp"
    }
  },
  {
    goal: "Широкий кадр: рассвет над российским степным пейзажем…",
    prompt: "Фотореалистичный широкий кадр: рассвет над российским степным пейзажем, дорога-магистраль уходит к линии горизонта, слева берёза и сосны, справа поле с линиями высоких фургонов не видно, чистое небо, лёгкая дымка. На переднем плане деревянный стол с разложенными предметами профессий без надписей: защитная каска, рулетка, чертёжная линейка, рабочие перчатки, книга-учебник без текста, ноутбук с полностью белым экраном, кисть и краска, компас. Перспектива низкая, композиция диагональная, мягкое тёплое контровое освещение, цветовая палитра сине-зелёная с золотистыми акцентами. 8K, сверхдетализация, резкость по всему кадру.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/041_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/041_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/041_ideogram.webp"
    }
  },
  {
    goal: "В школьном технопарке Санкт-Петербурга: деревянные парты…",
    prompt: "Фотореалистичная сцена в школьном технопарке Санкт-Петербурга: деревянные парты, макетные столы с роботизированными наборами, прозрачные акриловые панели, 3D-печатные детали, папки с портфолио без надписей, мотки проводов, инструменты и небольшой собранный прототип-устройство на круглом основании. Широкий план под углом 30° сбоку, композиция с направляющей диагональю к центру прототипа. Мягкий дневной свет из окна, пасмурная погода за стеклом, сдержанная палитра синего, серого и теплого оранжевого. Резкая фокусировка, 8K, высокая детализация, без людей, без текста и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/042_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/042_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/042_ideogram.webp"
    }
  },
  {
    goal: "В русском осеннем лесу, сумерки, пасмурно и мягкий дождь, у…",
    prompt: "Фотореалистичная сцена в русском осеннем лесу, сумерки, пасмурно и мягкий дождь, у кромки тропинки растёт одно старое дерево с крупным разветвлением: ветви расходятся как дерево исходов, по каждой ветке висят гирлянды из разноцветных желудей и листьев, некоторые упали на землю в аккуратные группы, показывая варианты развития без надписей. Кадр снят с уровня глаз у основания дерева, широкоугольная композиция направляет взгляд по ветвям к дальнему плану. Холодно-тёплая палитра: охра, зелёный, тёплый коричневый. Резкий фокус, высокая детализация, 8K, кинематографичный мягкий рассеянный свет, без людей и любых текстовых/диаграммных элементов.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/043_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/043_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/043_ideogram.webp"
    }
  },
  {
    goal: "В российском холодном цехе пищеблока: нержавеющий стол…",
    prompt: "Фотореалистичная сцена в российском холодном цехе пищеблока: нержавеющий стол, раздельные цветные доски для сырья и ножи, маркированные контейнеры для хранения с крышками, таз для мойки и раковина с пеной и дезинфицирующим средством, термометр у гастроёмкостей, холодильная витрина с салатами, заливными и многослойными закусками; инвентарь аккуратно убран, без остатков продуктов. Снимок крупным планом под углом 30° с акцентом на раздельный инвентарь, мягкий белый свет, нейтральная чистая цветовая гамма. 8K, резкий фокус, без людей, без текста и надписей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/044_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/044_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/044_ideogram.webp"
    }
  },
  {
    goal: "Школьной образовательной среды как системы условий: широкий…",
    prompt: "Фотореалистичная сцена школьной образовательной среды как системы условий: широкий вид на светлый школьный коридор в общеобразовательной школе в России, дневной пасмурный свет, мокрый после дождя асфальт у входа за стеклянными дверями, на стенах аккуратные светлые панели, стойка с расписанием без надписей, зона для хранения портфелей, мягкие ковровые дорожки, подоконники с зелёными комнатными растениями, безопасные поручни и закрытые окна с жалюзи. Камера на уровне глаз, центральная перспектива, симметрия. Мягкое рассеянное освещение, спокойная палитра бежево-голубая, высокая детализация, резкий фокус, 8K. Без людей, без текста, без диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/045_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/045_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/045_ideogram.webp"
    }
  },
  {
    goal: "Широкий кинематографичный вид на торговый путь из варяг в…",
    prompt: "Широкий кинематографичный вид на торговый путь из варяг в греки: старинная ладья с резной кормой и щитами у борта скользит по реке к устью, на дальнем плане каменный византийский порт с куполами и мраморными причалами, между ними сигнальные костры на холмах и крепости у переправ. Справа ветви с серебристыми бликами, слева темно-синие воды. Композиция с направляющей линией русла к горизонту, мягкий туман раннего утра, контрастное золотистое освещение. Фотореализм, высокая детализация, 8K, резкая фокусировка, без людей, без текста и без схем.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/046_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/046_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/046_ideogram.webp"
    }
  },
  {
    goal: "В учебной автомастерской в России: на металлическом верстаке…",
    prompt: "Фотореалистичная сцена в учебной автомастерской в России: на металлическом верстаке разложены четыре безмаркерные макета ДВС (без надписей): бензиновый четырехтактный с видимой свечой зажигания и впускным коллектором, дизельный четырехтактный с форсункой и камерой сгорания, газовый двигатель с газовым редуктором и патрубками, рядом компактный двухтактный блок; дополнительно в кадре один рядный и один V-образный макет цилиндров. Перспектива слегка сверху, композиция слева направо, мягкий дневной свет через окно, холодно-серые и синие тона. 8K, резкий фокус, высокая детализация, студийная предметная съемка, photorealistic 3D-like.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/047_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/047_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/047_ideogram.webp"
    }
  },
  {
    goal: "В светлом коридоре медицинского колледжа в дневное время…",
    prompt: "Фотореалистичная сцена в светлом коридоре медицинского колледжа в дневное время, пасмурная погода за окнами: на деревянном столе лежат медицинский стетоскоп, белая медицинская перчатка, блокнот без надписей, ручка и аккуратная пластиковая 3D-модель человеческого мозга на подставке. Над мозгом мягкое полупрозрачное световое свечение, символизирующее психическую тему без текста. Перспектива сверху под углом 30°, композиция по правилу третей, фоновое размытие. Холодно-нейтральная палитра (белый, серый, синий), мягкий рассеянный свет, 8K, резкость, высокая детализация, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/048_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/048_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/048_ideogram.webp"
    }
  },
  {
    goal: "Широкий кадр: туманный предрассветный европейский пейзаж над…",
    prompt: "Фотореалистичный широкий кадр: туманный предрассветный европейский пейзаж над рекой в столичном районе, вдали видны безымянные силуэты готических и барочных зданий, каменные мосты и старинные дворцы. На переднем плане на пустом деревянном консульском столе лежат папки с гербами без узнаваемого текста, запечатанные восковые печати, стопка чистых бланков пергамента и потемневшие карты без надписей и линий. Перспектива с уровня стола, боковой рассеянный свет, холодная серо-синяя палитра с теплым янтарным отблеском воска, резкая детализация, 8K, sharp focus, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/049_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/049_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/049_ideogram.webp"
    }
  },
  {
    goal: "Стилизованная векторная иллюстрация для титульного слайда…",
    prompt: "Стилизованная векторная иллюстрация для титульного слайда: скрещённые петровские шпаги (символ регулярной армии), рядом/в центре деликатный намёк на эмблему регулярной армии XVIII века (без букв и текста), на фоне полупрозрачный силуэт парусного корабля XVIII века. Цвета: глубокий синий/стальной с лёгкими золотистыми акцентами, контрастный, аккуратные контуры, без надписей, под формат 16:9.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/050_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/050_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/050_ideogram.webp"
    }
  },
  {
    goal: "В старом кабинете в Москве: деревянный письменный стол…",
    prompt: "Фотореалистичная сцена в старом кабинете в Москве: деревянный письменный стол, стопка архивных дел в папках из крафт-бумаги, пожелтевшие рукописные листы с сургучной печатью, перьевая ручка, увеличительное стекло, компас, небольшой фрагмент дореволюционной карты России без обозначений, кожаный переплёт и аккуратная рамка из тонкого орнаментального багета как символ исследовательской основы. Перспектива сверху-под углом 30°, мягкий тёплый свет от настольной лампы, боковые тени, сдержанная палитра охра, тёмно-зелёный, кремовый. Резкий фокус, 8K, высокая детализация, без текста, без людей, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/051_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/051_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/051_ideogram.webp"
    }
  },
  {
    goal: "В современном бизнес-офисе в Москве, вечер, пасмурно, дождь…",
    prompt: "Фотореалистичная сцена в современном бизнес-офисе в Москве, вечер, пасмурно, дождь за окном, отражения на стекле. На переднем плане деревянный стол с папкой с маркировкой без букв, стопкой аккуратных бумажных отчётов, рядом латунный компас без символов и зрелый колос пшеницы. На заднем плане за стеклянной перегородкой светятся два экрана с размытым интерфейсом из абстрактных цветовых блоков без текста. Кадр широкоугольный, перспектива с уровня стола, контрастное мягкое освещение, палитра сине-серые и тёплые бежевые тона. Резкий фокус, 8K, высокая детализация.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/052_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/052_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/052_ideogram.webp"
    }
  },
  {
    goal: "В российской аудитории университета: широкий стол у окна…",
    prompt: "Фотореалистичная сцена в российской аудитории университета: широкий стол у окна, пасмурное утро, серые облака, мягкий естественный свет. На переднем плане стопка учебников по информатике и тетрадь, вокруг разложены флеш-накопитель, калькулятор без надписей, разноцветные закладки с однотонными вкладками. В центре композиции — книга раскрыта, но без текста и символов, видны только чистые страницы. Перспектива на уровне глаз, камера под небольшим углом, акцент на стопке и закладках. Высокая детализация, резкий фокус, 8K, 50mm, кинематографичное мягкое освещение, нейтральная палитра с синим и зелёным.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/053_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/053_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/053_ideogram.webp"
    }
  },
  {
    goal: "В российском школьном кабинете, утро, пасмурная погода за…",
    prompt: "Фотореалистичная сцена в российском школьном кабинете, утро, пасмурная погода за окном, мягкий дневной свет. На деревянном столе: открытый учебник, методическое пособие, блокнот с чистыми страницами, ручка, линейка, стопка тетрадей, папка с файлами, рядом классный журнал без видимых записей. На заднем плане зеленая меловая доска с пустой поверхностью. Композиция: широкоугольный кадр 35 мм, низкая точка съемки, диагональная линия от книг к доске. Палитра: спокойные сине-зеленые и теплые бежевые тона. Резкость по переднему плану, 8K, высокая детализация, четкий фокус. Без текста, надписей и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/054_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/054_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/054_ideogram.webp"
    }
  },
  {
    goal: "Highly detailed 3D render, photoreal materials, global…",
    prompt: "Highly detailed 3D render, photoreal materials, global illumination, 8K, sharp focus. Cinematic mood of purposeful development in a quiet Russian education space, cool teal shadows with warm amber sunlight spilling from the left, soft volumetric light beams through frosted window panels, gentle bokeh. Composition: overhead shot, tightly controlled symmetric layout. Visual subject (Item 3: “Focus on development”): a circular “development path” made from three interlocking material bands—left band of smooth wooden stepping stones (learning), middle band of soft silicone blocks with varied textures (correction), right band of ceramic mosaic tiles with subtle relief patterns (socialization)—arranged to form a continuous loop. The loop is not a diagram; it’s a tangible pathway for development. Centerpiece: a vertical stack of blank, transparent acrylic plates shaped like curved growth steps, with internal floating micro-particles (golden amber specks) that rise upward, suggesting possibilities and progress without text. Surrounding props reinforce capacity rather than limitations: a neatly staged toolkit of geometric building pieces (not used in other prompts), a small potted plant with healthy green leaves (healthy growth), and a felt sensory cloth with tactile edges folded like a quiet invitation. Ensure uniqueness of objects: unlike other prompts, no optical lens, no earmuff pads, no medical vials, no kinetic steel cabinet—only the loop path, acrylic growth stack, plant, felt cloth, and geometric builders. Camera angle and crop: direct top-down, filling most of the frame with the loop and centered acrylic stack, leaving narrow margins for frosted window reflections. Lighting: warm amber highlights glint on ceramic relief tiles and wooden stepping stones; teal ambient light defines edges; realistic shadows fall outward to show depth of each band. No people, no children figures, no signage, and no written indicators—only material storytelling of learning, correction, and socialization as one unified process centered on a child’s development potential. Maintain the same teal-amber cinematic cohesion across the slide for unified visual style.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/055_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/055_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/055_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic, ultra-detailed 8K, sharp focus, cinematic…",
    prompt: "Photorealistic, ultra-detailed 8K, sharp focus, cinematic warm sunlight from the left, natural earthy palette (ochre soil, muted greens, pale sky), slight film grain. A close-up ground-level scene on a Kazakhstan agricultural hillside: a carefully prepared strip of bare soil beside a freshly graded slope, with a small cluster of non-overlapping survey props arranged on the ground—one wooden measuring staff, a red-and-white compact leveling tool, and bright yellow flagging tape tied to three evenly spaced ground stakes. The tape creates a clear visual boundary that suggests the initial goal and requirements without any text or labels. In the background, softly blurred rows of winter wheat fade into distance, and the slope’s micro-rills indicate erosion risk. Composition: extreme low-angle close-up, focusing on the leveling tool and measuring staff casting crisp shadows across the uneven dirt; the slope edge enters from the lower right, leading lines of the furrows guide the eye toward the horizon. Camera crop: tight frame around the tools and the slope profile, with only a thin band of sky visible. Lighting: golden hour with high-contrast yet natural shadows; dust motes catch the light near the soil surface. Mood: controlled, methodical, and purposeful. No people, no buildings, no text, no diagrams, no signage—only realistic field equipment and terrain elements that visually communicate defining the initial purpose and criteria for erosion-control design.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/056_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/056_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/056_ideogram.webp"
    }
  },
  {
    goal: "Иллюстрация: рассвет над Древней Русью, широкая река и…",
    prompt: "Фотореалистичная иллюстрация: рассвет над Древней Русью, широкая река и лесистые берега, на дальнем плане разрозненные сторожевые башни соединяет каменный мост. На переднем плане лежат сломанные копья и мечи с опущенными гардами, рядом тёплый деревянный щит с пустым полем без надписей, вокруг — выжженные следы усобиц, постепенно сменяющиеся зеленью. Кадр с низкой точки, диагональная композиция к мосту, мягкий туман и лучи утреннего солнца, золотисто-синий цветовой акцент. Резкость по всему кадру, 8K, sharp focus, высокая детализация, без людей, без текста, без символики с надписями.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/057_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/057_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/057_ideogram.webp"
    }
  },
  {
    goal: "В школьной библиотеке России, конец дня, мягкая пасмурная…",
    prompt: "Фотореалистичная сцена в школьной библиотеке России, конец дня, мягкая пасмурная погода за окнами. На переднем плане резной деревянный стол учительской: открытая книга с закладками, блокнот с цветными магнитами-стрелками (без надписей), аккуратно сложенный школьный рюкзак, две чашки чая с ароматным паром, у правого края тетрадь с российской лентой в форме тонкой петли. На заднем плане стеллажи и доска с пустыми рамками для фотографий, развешаны символические бумажные сердечки-гирлянды. Перспектива на уровне стола, композиция по правилу третей, тёплый рассеянный свет, высокая детализация, резкость, 8K, sharp focus, без людей, без текста, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/058_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/058_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/058_ideogram.webp"
    }
  },
  {
    goal: "В северной сибирской тайге на рассвете, умеренный мороз и…",
    prompt: "Фотореалистичная сцена в северной сибирской тайге на рассвете, умеренный мороз и легкий туман; на переднем плане традиционный чум из бересты и оленьих шкур, рядом охотничьи лыжи, деревянная утварь, узорчатый пояс с геометрической вышивкой, связка сухих трав. На среднем плане на валуне лежит раскрытая кожаная тетрадь с чистыми листами и деревянная дощечка с резными пиктограммами без букв, передающими мотивы языка и рассказа. Широкоугольная перспектива, мягкий рассеянный свет, холодная палитра с акцентами красно-коричневого. Сверхдетализация, 8K, резкий фокус, естественные текстуры. Людей нет. Текста и графиков нет.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/059_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/059_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/059_ideogram.webp"
    }
  },
  {
    goal: "Широкий кадр Якутии: заснеженная лиственничная тайга на…",
    prompt: "Фотореалистичный широкий кадр Якутии: заснеженная лиственничная тайга на берегу замерзшей реки Лены, тёмные силуэты деревьев на переднем плане, бескрайняя белая равнина и уходящая вдаль линия горизонта, лёгкий иней на ветвях, дальние сопки в дымке. Время рассвета, морозный ясный воздух, мягкий холодный свет, тени длинные. Композиция с диагональю тропы/санного пути, направляющей взгляд в глубину, без людей и без надписей. Небо с тонким северным сиянием в верхнем углу. Чёткий фокус, 8K, высокая детализация, резкость по всей глубине.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/060_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/060_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/060_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic highly detailed 8K documentary-style scene…",
    prompt: "Photorealistic highly detailed 8K documentary-style scene with desaturated winter Russia palette (cold steel blues, faded browns, muted olive) and directional lighting from upper left with soft haze; mood: disciplined, tense, grounded. Depict the core idea of a commander setting direction through a command-ready personal toolkit rather than any person: in a snow-dusted dugout corridor, show an open leather field map case on a wooden table, with a brass compass, a metal protractor, and a rolled canvas map edge partially unfurled (no readable markings). Beside it, a closed command notebook with blank pages visible, a wide leather strap, and a brass pocket watch laid face-down create the sense of fast, accurate decision-making across stages of the front path. Composition: close-up with shallow depth of field, camera at tabletop height, lens focused on the compass and the map case rim, while the background falls into creamy blur—sandbags, rough plank walls, and a single hanging lantern casting warm highlights against the cold air. Include distinctive objects that will not reappear elsewhere: only this frame contains the brass compass, leather map case, pocket watch, and blank notebook stack. Add subtle weather cues—thin snow crystals caught in the lantern glow, condensation on metal, and a faint drifting smoke smell visualized as volumetric haze. Ensure no text, no letters, no symbols that imply writing; keep surfaces clean and unreadable. The scene should feel like a moment just before movement: the rolled map is slightly lifted by a draft from an open dugout entrance in the far background, while the tabletop objects remain sharply rendered, conveying control and readiness. Camera crop: 4:3 tight crop centered slightly right on the compass, with strong chiaroscuro and crisp micro-texture in leather grain and metal tarnish.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/061_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/061_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/061_ideogram.webp"
    }
  },
  {
    goal: "В российском городе на закате: пустынная привокзальная…",
    prompt: "Фотореалистичная сцена в российском городе на закате: пустынная привокзальная площадь с парком и фонтаном, рядом стеклянный аэропортовый терминал без надписей, вдали купола православного храма, по центру широкая дорога с несколькими разветвляющимися маршрутами, на переднем плане чемодан на колесах, развернутый дорожный рюкзак, банковская карта без маркировок и пластиковый посадочный талон без текста; через пространство видны световые траектории, соединяющие транспорт и достопримечательности. Съемка с уровня глаз, диагональная композиция, мягкий теплый свет, палитра сине-зеленая и золотистая, ультра-детализация, резкий фокус, 8K.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/062_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/062_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/062_ideogram.webp"
    }
  },
  {
    goal: "В современном офисе в Москве вечером: деревянный стол, на нем…",
    prompt: "Фотореалистичная сцена в современном офисе в Москве вечером: деревянный стол, на нем папка с документами без надписей, кожаный портфель, гроссбух с цифрами-заглушками без читаемого текста, металлические весы правосудия и молоток судьи, рядом прозрачный сейф-ящик с закрытым замком, над всем лежит лупа. Композиция: крупный план под углом 35 градусов, весы и молоток в центре, документы слева, сейф справа, глубина резкости на ключевых предметах. Драматичный рассеянный свет из окна, холодно-нейтральная палитра с акцентом золота. 8K, sharp focus, ultra-detailed, photorealistic, без людей, без текста, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/063_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/063_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/063_ideogram.webp"
    }
  },
  {
    goal: "В школьном классе, дневной свет из окна, пасмурная погода за…",
    prompt: "Фотореалистичная сцена в школьном классе, дневной свет из окна, пасмурная погода за стеклом. На деревянной парте раскрыт тетрадный лист с аккуратными красными пометками преподавателя, рядом карандаш, ластик и увеличительное стекло; открыта новая тетрадь с чистой страницей, а сверху лежит небольшая стопка учебников. На заднем плане на полке стоит без надписей книга в твёрдом переплёте с нейтральным государственным гербом-стилизацией. Съёмка с уровня глаз, диагональная композиция, мягкие тени, спокойная цветовая гамма сине-серых тонов. Резкость 8K, sharp focus, 3D-реализм с фотодеталями, без текста и символов-надписей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/064_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/064_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/064_ideogram.webp"
    }
  },
  {
    goal: "Широкий ночной пейзаж в российской северной тайге…",
    prompt: "Фотореалистичный широкий ночной пейзаж в российской северной тайге: заснеженная равнина и редкий хвойный лес на переднем плане, открытый северный горизонт без огней, ясное небо с мягкими облаками вдали. Над горизонтом размытые ленты северного сияния зелёно‑голубых оттенков, как при длинной выдержке, с заметным движением дуг. Взгляд с низкой точки, композиция по правилу третей, горизонт занимает нижнюю треть кадра. Драматическое лунное и свето-сияющее освещение, высокая детализация. 8K, резкий фокус по горизонту, реалистичная цветопередача, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/065_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/065_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/065_ideogram.webp"
    }
  },
  {
    goal: "Широкий план без людей: открытая книга на деревянном столе в…",
    prompt: "Фотореалистичный широкий план без людей: открытая книга на деревянном столе в аудитории, рядом стопка учебников, ученическая тетрадь с пустыми страницами, тонкое перо и бронзовый компас; за панорамным окном — сельская Беларусь: золотые поля, извилистая река, вдали силуэт современного здания и аккуратные деревенские домики на мягком горизонте. Перспектива на уровне стола, композиция по правилу третей, передний план резкий. Тёплый утренний свет, пастельная палитра золото-зелёный-сине-серый. Кинематографическая глубина резкости, сверхдетализация, 8K, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/066_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/066_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/066_ideogram.webp"
    }
  },
  {
    goal: "В заброшенной русской усадьбе XIX века: темная гостиная с…",
    prompt: "Фотореалистичная сцена в заброшенной русской усадьбе XIX века: темная гостиная с деревянными стенами, камином и резными дверными проемами, на столе старое запечатанное письмо в кожаном конверте, серебряная печатка, потемневшая семейная фотография, медный ключ и лупа; у стены потайная ниша, из которой видны фрагменты бумаги. Угол обзора низкий, как будто посетитель подходит к столу. Драматическое боковое освещение от керосиновой лампы и узкий луч света подсвечивает скрытую деталь. Тон: мрачный, теплый, сине-зеленая тень. 8K, резкая фокусировка, wide shot, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/067_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/067_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/067_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic cinematic style, cool blue-gray palette, soft…",
    prompt: "Photorealistic cinematic style, cool blue-gray palette, soft diffused lighting from the left, calm professional mood, highly detailed sharp focus, 8K. Depict a modern matte-gray smartphone positioned in a dim government-like workspace, but instead of any readable interface, show only floating translucent UI tiles as pictograms: small location-pin shapes, tiny contact card silhouettes, and a faint history trail of glowing dots, all emerging from the phone as if the device is “an open showcase.” The phone lies on a wooden desk near a clear acrylic display stand; the stand’s inner edges catch light and reveal extra “leaking” details projected outward like delicate holographic reflections. Surrounding objects are strictly non-text: a clear glass paperweight, a few sealed envelopes with blank surfaces, and a shallow tray of silica gel. Composition: extreme close-up crop on the upper half of the phone and the acrylic stand, with the holographic pictograms spilling toward the camera lens, creating a sense that more information is exposed than intended. Camera angle slightly low and off-center (phone top edge dominating the frame), shallow depth of field so the foreground pictograms are crisp while the desk background fades into soft blur. Lighting emphasizes transparency and unwanted visibility: bright highlights on acrylic edges, subtle reflections in the phone’s dark screen, and a gentle vignette. Color accents come only from neutral whites, muted cyan glows for the leaked pictograms, and faint warm reflections from the desk. Ensure no text, no logos, no readable symbols—only generic geometric icons. Visual message: the open “public-facing” profile accidentally reveals location trail and contact-like elements, implying the need to close the open showcase and separate personal and official data into different contours.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/068_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/068_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/068_ideogram.webp"
    }
  },
  {
    goal: "Без людей, показывающая переход ораторства: слева античная…",
    prompt: "Фотореалистичная сцена без людей, показывающая переход ораторства: слева античная каменная площадь и полукруглый амфитеатр, на мраморной трибуне сложенный свиток, факелы и римские колонны; справа современная цифровая сцена с металлической стойкой микрофона, экраном с абстрактным световым узором и мягким светодиодным контуром. Широкий кадр с перспективой с низкой точки, диагональный композиционный переход между эпохами. Тёплое закатное освещение слева, холодный неон справа, контрастная цветовая палитра охра и сине-стальная. Резкость 8K, высокая детализация, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/069_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/069_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/069_ideogram.webp"
    }
  },
  {
    goal: "Крупный план археологических находок: связка височных колец…",
    prompt: "Фотографический крупный план археологических находок: связка височных колец кривичей с бронзовыми спиралями, подвески с зооморфными формами (коньки, челюсти хищников), клыки животных, бронзовые крестовидные амулеты и шумящие детали, уложенные на светлом льняном полотне в неглубоком лотке музея, рядом темные комки земли и фрагменты керамики без надписей. Перспектива сверху под углом 30°, боковое мягкое светотеневое освещение, акцент на фактуре металла и патине. Стиль фотореализм, 8K, резкость по всей глубине резкости, естественные цвета бронзы, охра и холодный серо-сине фон.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/070_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/070_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/070_ideogram.webp"
    }
  },
  {
    goal: "В школьной лаборатории, вечер, мягкий рассеянный свет через…",
    prompt: "Фотореалистичная сцена в школьной лаборатории, вечер, мягкий рассеянный свет через окно. На штативе горизонтально закреплён прямой медный проводник, рядом катушка и винтовой “буравчик”-механизм, создающий поступательное движение и вращение: показано только направлением движения через светящиеся стрелки на фоне, без каких-либо надписей. Вокруг провода вокруг него видны реалистичные линии магнитного поля как тонкие дугообразные россыпи железных опилок, образующие замкнутые окружности. Камера крупным планом под небольшим углом сверху, высокая резкость, 8K, резкие блики на металле, палитра медь-сталь-сине-зелёные акценты.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/071_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/071_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/071_ideogram.webp"
    }
  },
  {
    goal: "В огороде на дачном участке в России: после перекопки верхний…",
    prompt: "Фотореалистичная сцена в огороде на дачном участке в России: после перекопки верхний слой почвы разрыхлен граблями, видны мелкие комковатые частички глубиной около 5–10 см, как крупный песок; рядом грядка с ровной поверхностью, убраны ямки и бугорки, почва равномерно темная и влажная. Крупный план под небольшим углом сверху, грабли частично в кадре у края грядки, дорожка из земли отведена на задний план. Мягкий дневной свет, зеленые всходы вдали, естественная цветовая гамма земли и травы. Резкость 8K, сверхдетализация, без людей, без текста, без схем.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/072_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/072_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/072_ideogram.webp"
    }
  },
  {
    goal: "В сентябрьской Москве: школьный двор у входа в школу, серые…",
    prompt: "Фотореалистичная сцена в сентябрьской Москве: школьный двор у входа в школу, серые кирпичные стены, металлические перила, дорожки после недавнего дождя. На переднем плане аккуратно разложены: учебный журнал без надписей, школьный рюкзак, пачка правил в виде папки с нейтральным значком щита, рядом семейный домашний календарь с пустыми клетками и мелкими бумажными карточками без текста. Перспектива на уровне глаз, широкий план, мягкий рассеянный дневной свет, легкая контрастность, сдержанная палитра синие и серые тона с акцентом зеленого. Резкость по всему кадру, 8K, sharp focus, без людей и без любых надписей, без схем и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/073_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/073_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/073_ideogram.webp"
    }
  },
  {
    goal: "В кабинете военной психологической службы: пустой…",
    prompt: "Фотореалистичная сцена в кабинете военной психологической службы: пустой бежево-серый кабинет в здании казарменного типа, у окна ночь, идет легкий снег, вдалеке размытый плац. На переднем плане два пустых стула с прямыми спинками, между ними круглое нейтральное пространство как «фигура», вокруг в глубине резкость ниже: папка с папкой-планшетом, листы без текста, стакан воды, небольшой поднос с гладкими камнями. Композиция — симметрия, нижний ракурс на уровне стола. Мягкий контровой свет из окна, холодно-нейтральная палитра с теплыми бликами. 8K, резкий фокус, высокая детализация, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/074_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/074_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/074_ideogram.webp"
    }
  },
  {
    goal: "Фотонреалистичный широкий кадр современного городского центра…",
    prompt: "Фотонреалистичный широкий кадр современного городского центра г. Собинка во Владимирской области: спокойная улица с брусчаткой, двух- и трехэтажные кирпичные дома с резными наличниками, аккуратные парковки и остановка без надписей, вдали белокаменная православная церковь с золотыми куполами, аллея берез. Пасмурная погода с мягкими облаками, легкий туман над дорогой, теплый закатный свет в окнах. Камера на уровне глаз, композиция с ведущей перспективой по улице. Резкая детализация, 8K, четкий фокус, высокая реалистичность.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/075_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/075_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/075_ideogram.webp"
    }
  },
  {
    goal: "Широкоугольное фото внутреннего дата-центра в индустриальном…",
    prompt: "Фотореалистичное широкоугольное фото внутреннего дата-центра в индустриальном здании Санкт-Петербурга, ночная обстановка, мягкий туман от кондиционирования не виден, сухой воздух, ряды серверных стоек с маркированными без текста инвентарными наклейками, передние панели с индикаторами, магистральные кабели в аккуратных лотках, толстые силовые кабели и резервные блоки питания без надписей, воздуховоды и вентиляторы за перфорированными дверцами, датчики температуры на стойках, проходы для обслуживания. Низкий угол съемки вдоль рядов, симметрия по центру, холодная палитра с акцентом на зелёные статусы, мягкий рассеянный свет, резкий фокус, 8K, ultra-detailed, sharp focus, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/076_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/076_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/076_ideogram.webp"
    }
  },
  {
    goal: "В российской кухне вечером: на деревянном столе лежит пустой…",
    prompt: "Фотореалистичная сцена в российской кухне вечером: на деревянном столе лежит пустой кулинарный блокнот с цветными закладками (без надписей), рядом лежит аккуратная стопка пустых карточек-планов и несколько одноцветных стикеров без текста; на магнитной доске на холодильнике висят чистые листы с круглыми магнитами; у края стола открытая плетёная корзина с продуктами: хлеб, яйца, молоко, крупы, овощи, фрукты, баночка с зеленью. Камера сверху под углом 30°, композиция треугольником, мягкий тёплый свет лампы над столом, зимние сумерки в окне, палитра бежевый, молочный, зелёный, тёпло-коричневый. 8K, сверхрезкая фокусировка, высокая детализация, без людей, без текста, без диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/077_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/077_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/077_ideogram.webp"
    }
  },
  {
    goal: "Испытания бетона на сжатие в лаборатории: бетонный куб…",
    prompt: "Фотореалистичная сцена испытания бетона на сжатие в лаборатории: бетонный куб 150×150 мм установлен между нижней и верхней плитой испытательной машины. Добавить понятные подписи без ошибок: 'Нижняя плита', 'Бетонный куб 150×150 мм', 'Верхняя плита'.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/078_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/078_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/078_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic 8K studio product photography, cohesive…",
    prompt: "Photorealistic 8K studio product photography, cohesive Russian skincare-bathroom setting, soft diffused lighting from the left, cool neutral palette (bone white, misty gray, soft silver), high technical clarity, sharp focus on foreground elements. Depict “preparation of the skin for care” using a toner step without any text or labels: show an overhead top-down scene of a minimalist skincare station where a clear water-toner spray bottle (different shape from the first prompt, with a smooth curved shoulders design and a matte transparent nozzle) releases a fine mist into the air. Beneath, use a circular ceramic dish (matte, off-white) holding several overlapping cotton rounds—each round separated by tiny spacing so the image reads as “even, steady base,” not a single clump. Crucially, include a small glossy glass bowl with a faintly swirling clear liquid film that reflects the mist, suggesting pH balance and predictable compatibility through balanced, calm motion (no scientific symbols). Composition: centered overhead with slight asymmetry—spray bottle slightly rotated clockwise, dish offset to the lower third. Capture condensation-like micro droplets on the ceramic surface and on the bottle nozzle, with realistic specular highlights and ultra-fine mist particles. Background: softly blurred pale stone tiles and a wooden shelf edge in muted tones, no accessories that repeat from prompt 1 (no amber dropper bottle, no frosted tray from prompt 1). Mood: orderly, supportive, “skin ready” calm—everything clean, measured, and controlled. Avoid any human presence or facial context; the scene should communicate preparation purely via the toner mist, controlled liquid reflections, and tidy arrangement. Do not show any text, writing, brand marks, charts, or abstract floating symbols—only practical skincare objects and the visual language of misting and gentle hydration readiness.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/079_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/079_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/079_ideogram.webp"
    }
  },
  {
    goal: "В студенческом коворкинге в Москве, вечер, мягкий дождь и…",
    prompt: "Фотореалистичная сцена в студенческом коворкинге в Москве, вечер, мягкий дождь и отражения на окнах, вид через большое панорамное стекло. На столе: смартфон с безликими карточками рекламы, кошелёк, банковская карта, бумажный чек без надписей, шопинг-сумка, рядом лупа, компас выбора и небольшой набор иконок (глаз, сердце, курсор) без текста. Перспектива с уровня стола, диагональная композиция к центру с перекрытием предметов. Тёплый рассеянный свет, контрастные блики, палитра синий+беж+бордовый. 8K, сверхдетально, резкий фокус, photorealistic, wide shot.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/080_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/080_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/080_ideogram.webp"
    }
  },
  {
    goal: "В служебном кабинете отдела государственных закупок в России…",
    prompt: "Фотореалистичная сцена в служебном кабинете отдела государственных закупок в России: на деревянном столе раскрытая папка с договором без надписей, рядом пломбирова нный пакет с маркировочной наклейкой без текста, акт приемки как чистый бланк, печать-штамп без букв, лупа для экспертизы, банковская гарантийная карточка без надписей, папка с материалами претензионной работы и конверт с подпечаткой без текста. Композиция сверху (top-down), предметы образуют диагональ к центру. Холодный дневной свет из окна, сдержанная палитра синего и серого. Максимальная детализация, резкость, 8K, 35mm, мягкие тени, без людей и без любого текста или графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/081_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/081_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/081_ideogram.webp"
    }
  },
  {
    goal: "3D-сцена: крупный план прозрачной сферической клетки на…",
    prompt: "Фотореалистичная 3D-сцена: крупный план прозрачной сферической клетки на нейтральном светло-голубом фоне в учебной лабораторной атмосфере, видны ядро, мембрана, органеллы, внутри поток микропузырьков и растворённых молекул, аккуратно разделённые на зоны разной плотности, создающие ощущение поддержания равновесия и обмена веществ. Сверху мягкий дневной свет через стекло, сбоку лёгкие блики, глубина резкости, чистые контуры. Центральная композиция по правилу третей, перспектива чуть под углом. Детализация 8K, резкий фокус, высокое качество, без людей, без текста, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/082_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/082_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/082_ideogram.webp"
    }
  },
  {
    goal: "Натюрморт в музейном зале: деревянный печатный станок XVI…",
    prompt: "Фотореалистичный натюрморт в музейном зале: деревянный печатный станок XVI века с металлическими валами и отпечатанной бумагой без текста, рядом стопка гравюр и старинные карты мира с компасной розой, морскими путями и изображениями континентов, на столе песочные часы и бронзовый циркуль. Вид сверху под углом 35°, композиция по диагонали, карты и станок в фокусе. Тёплый рассеянный свет закатного дня через арочные окна, мягкие тени, сдержанная палитра охра, сепия, тёмно-зелёный. Сверхдетально, 8K, резкий фокус.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/083_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/083_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/083_ideogram.webp"
    }
  },
  {
    goal: "В учебном центре/медкабинете, вечер, мягкий рассеянный свет…",
    prompt: "Фотореалистичная сцена в учебном центре/медкабинете, вечер, мягкий рассеянный свет. На полу у дивана лежит бесконтактная манекенная фигура без признаков травм (без людей), рядом аптечка первой помощи, маска для ИВЛ, одноразовые перчатки, стерильные салфетки и телефон-гарнитура с крупной кнопкой вызова 112, но без надписей. На переднем плане неравномерные “зрачковые” наклейки на макете головы как визуальный маркер. Съемка с уровня пола, крупный план, контрастные нейтральные цвета (синий, серый, белый, акцент красным). Резкость, 8K, sharp focus, высокая детализация, реалистичные материалы.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/084_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/084_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/084_ideogram.webp"
    }
  },
  {
    goal: "Широкий пейзаж при мягком пасмурном свете, изображение…",
    prompt: "Фотореалистичный широкий пейзаж при мягком пасмурном свете, изображение побережья Ирландии: скалистая береговая линия с темными базальтовыми валунами, мокрая трава и вереск, маяк на мысе, вдали парусник или рыбацкое судно без людей, небольшой каменный мост и зеленые холмы. Композиция с высоты 35–45°, горизонт по правилу третей, глубина резкости до горизонта. Цветовая палитра: холодные сине-зеленые тона и серо-белая дымка. Без текста и символов, без людей, максимально детально, резкость 8K, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/085_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/085_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/085_ideogram.webp"
    }
  },
  {
    goal: "В российской начальной школе: школьный класс с деревянными…",
    prompt: "Фотореалистичная сцена в российской начальной школе: школьный класс с деревянными партами, на переднем плане два одинаковых настенных календаря с отрывными листками, каждый лист закрыт чистым белым кружком без цифр, рядом два методических блокнота и две тетради с цветными обложками в славянском орнаменте, карандаши и ручки в стакане, на краю кадра светлая школьная доска без надписей. Ракурс с уровня парт, широкий план, мягкий дневной свет через окна, легкий зимний морозный воздух. Резкая фокусировка, 8K, высокая детализация. Без людей, без текста, без диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/086_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/086_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/086_ideogram.webp"
    }
  },
  {
    goal: "Макроснимок в стерильном кабинете косметологии в Москве…",
    prompt: "Фотореалистичный макроснимок в стерильном кабинете косметологии в Москве: стеклянный флакон с прозрачным раствором без маркировок рядом с одноразовым шприцем и двумя стерильными одноразовыми салфетками на металлическом лотке, вокруг — чистые белые перчатки, ватные диски и ампулосъемник. Вид под углом 30° сверху, композиция с главным акцентом на флаконе в центре и мягкими бликами на металле. Мягкий рассеянный свет дневного заката из окна, холодно-белая и бирюзовая палитра. Стиль: photorealistic, 8K, резкая фокусировка, малая глубина резкости, без людей, без текста, без диаграмм.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/087_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/087_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/087_ideogram.webp"
    }
  },
  {
    goal: "В читальном зале юридической библиотеки в Москве, вечер…",
    prompt: "Фотореалистичная сцена в читальном зале юридической библиотеки в Москве, вечер, мягкий тёплый свет через высокие окна, пасмурная погода. На деревянном столе аккуратно разложены пять предметов по уровням: кожаная папка с договором, толстая книга с корешком юридического кодекса, свиток-манускрипт как обычай, стопка деловых бумаг с печатями как практика, открытый том научного комментария как доктрина. Камера под углом 30 градусов сверху, композиция слоистой пирамидой, глубина резкости, резкий фокус. Стиль: photorealistic, 8K, ultra-detailed, crisp edges, without any text or diagrams.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/088_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/088_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/088_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic cinematic 3D realism, highly detailed 8K…",
    prompt: "Photorealistic cinematic 3D realism, highly detailed 8K, sharp focus, warm earth palette with deep greens, sunlit gold highlights, and muted browns; soft morning mist over rows, natural outdoor atmosphere, right-to-left key sunlight at 25 degrees producing long realistic shadows and clear specular glints on plant surfaces; consistent mood of practical agriculture. Scene: a greenhouse edge transitioning to open field under an overcast-bright sky, with no people present. Primary subject: a raised plant propagation bench containing neatly arranged trays of seedlings with visible root structure through transparent growth inserts, and several hand-shaped grafting joints already formed using small biodegradable wrap rings (no hands, just the completed graft connections). Nearby, a protective canopy of fine insect mesh arches over one section of the bench, with dew droplets beading on the mesh fibers. For pest protection and selection: include a set of labeled but unmarked bio-secure seed envelopes sealed with plain color bands (no readable writing) and a small, weathered watering line with visible valves and emitters delivering a gentle mist; ensure the scene conveys biological support to plant breeding and resistance. Composition and framing: overhead top-down view that is offset—centered on the grafted plants, with the insect mesh forming a geometric curve cutting across the frame. Camera angle: nearly vertical, about 85–90 degrees, creating a crisp pattern of leaves, mesh texture, and soil granularity. Distinct objects only: no laboratory glass, no microscopes, no anatomical models. Lighting and color: warm highlights on leaf edges, cool diffuse fill from the sky, realistic dew sparkle, and detailed soil texture with clumps and fine roots. Add a background wide depth layer of field rows fading into mist, but keep focus sharp on the trays and graft joints. Avoid any text, diagrams, charts, or human presence; keep it purely visual and grounded in Russian agricultural practice and biology-based protection and selection.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/089_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/089_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/089_ideogram.webp"
    }
  },
  {
    goal: "В российской больнице, инфракрасно-холодный вечер в…",
    prompt: "Фотореалистичная сцена в российской больнице, инфракрасно-холодный вечер в реанимационном отделении: слева у кровати видны дыхательный аппарат и прозрачные трубки с непрозрачной жидкостью в аспираторе, рядом стерильные салфетки; в центре на лабораторном штативе несколько закрытых флаконов с культурами крови и стерильные пробирки; справа крупно показана повязка на ране/ожоге с тёмно-коричневым экссудатом и заживляющей марлей. Перспектива 3/4, композиция три зоны трёхкадром, акцент на контроле очага. Холодная нейтральная палитра с акцентами бледно-зелёного и приглушённого синего, драматичное мягкое освещение. Максимальная резкость, 8K, sharp focus, без текста, без диаграмм, без людей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/090_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/090_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/090_ideogram.webp"
    }
  },
  {
    goal: "Изображение: школьный компьютерный класс в России, вечер…",
    prompt: "Фотореалистичное изображение: школьный компьютерный класс в России, вечер, мягкий дождь за окнами, на столах игровые клавиатуры, мыши, наушники с микрофонами, геймпады, аккуратно разложенные синие кружки с эмблемой без текста, два больших монитора показывают абстрактную киберспортивную сцену без надписей и интерфейсных элементов, на стене светодиодная лента синего цвета, флаг с нейтральным орнаментом. Камера на уровне стола, диагональная композиция к мониторам, контровой свет и холодно-синяя палитра, высокая резкость, 8K, резкость по переднему плану, без людей, без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/091_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/091_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/091_ideogram.webp"
    }
  },
  {
    goal: "Изображение пустого зала российского суда: массивный…",
    prompt: "Фотореалистичное изображение пустого зала российского суда: массивный деревянный стол судьи без людей, на нем закрытая книга в светлом переплете с гладкой обложкой без надписей, рядом бронзовые весы правосудия, высокий постамент, занавеси цвета российского триколора. Фон: арочные окна, мягкая дымка, легкие дождевые блики, вид на фасад здания суда в Москве на закате. Кадр с низкой точки, широкоугольная перспектива, центральная симметрия. Теплый контровой свет, четкие фактуры, высокая детализация, резкость по всему кадру, 8K, sharp focus, без текста и графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/092_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/092_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/092_ideogram.webp"
    }
  },
  {
    goal: "В учебной инженерной лаборатории в Москве, дневной свет через…",
    prompt: "Фотореалистичный кадр в учебной инженерной лаборатории в Москве, дневной свет через высокие окна, легкая облачность. На переднем плане современный станок с ЧПУ, видны стойка управления, металлические направляющие и фрезерная головка; рядом подложены на чистом столе технические паспорта и листы с оценочными чек-листами без текста. Сцена показывает, что характеристики следует оценивать совместно: все элементы в одном кадре. Перспектива под углом 3/4, мягкое рассеянное освещение, сдержанная палитра серый, стальной, холодный синий. Резкий фокус, 8K, высокодетализированная фактура.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/093_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/093_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/093_ideogram.webp"
    }
  },
  {
    goal: "В интерьере старинного петербургского концертного зала конца…",
    prompt: "Фотореалистичная сцена в интерьере старинного петербургского концертного зала конца XIX века: деревянная сцена с роялем, скрипка и нотные рукописи без читаемого текста, раскрытая книга с пустыми нотными линейками, бронзовые подсвечники, тяжёлые бархатные портьеры, мраморные колонны, камин и витражные окна. Съемка с нижней точки у края сцены, широкий план, центральная композиция на инструменты и рояль. Тёплый рассеянный свет ламп и свечей, мягкая дымка, палитра бордо, тёмное золото, кремовый. Резкость на деталях, 8K, sharp focus, без людей, без надписей, без графиков.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/094_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/094_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/094_ideogram.webp"
    }
  },
  {
    goal: "На фоне российского морского порта вечером: ряды стальных…",
    prompt: "Фотореалистичный кадр на фоне российского морского порта вечером: ряды стальных контейнеров разных цветов, портальные краны, погрузчик, железнодорожная ветка и грузовой терминал, в центре крупно на переднем плане блестящий металлический глобус без надписей рядом с папкой документов, поверх — прозрачная лупа и печати на пустых бланках, рядом силуэт сигнальных маяков. Перспектива на уровне глаз, диагональная композиция направляет взгляд к контейнерам. Тёплый контровой свет закатного неба, холодные отражения металла, палитра сине-серая с оранжевыми акцентами. 8K, резкость, высокая детализация, без текста, без графиков, без людей.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/095_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/095_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/095_ideogram.webp"
    }
  },
  {
    goal: "В просторной библиотеке при дневном рассеянном свете: на…",
    prompt: "Фотореалистичная сцена в просторной библиотеке при дневном рассеянном свете: на деревянном столе лежит раскрытая книга с чистыми белыми страницами и орнаментальной рамкой, рядом гусиное перо в держателе, небольшая сургучная печать цвета бордо и лист бересты с тиснёным узором без букв. На заднем плане размыты стеллажи и тканевая драпировка в бело-сине-красной гамме. Композиция по правилу третей, низкая точка съёмки, мягкое боковое освещение, тёплые тона кожи древесины. Максимальная резкость, 8K, высокая детализация, широкоугольный кадр, без людей и без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/096_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/096_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/096_ideogram.webp"
    }
  },
  {
    goal: "В учебно-исследовательской лаборатории в пасмурный день, вид…",
    prompt: "Фотореалистичная сцена в учебно-исследовательской лаборатории в пасмурный день, вид под углом 3/4 на рабочий стол: стеклянная колба с прозрачным реагентом и пробирки (научная основа), стопка белых лабораторных журналов без надписей и образец материала в прозрачном контейнере (фундаментальные/прикладные исследования), рядом разложенные карточки с пиктограммами потребностей и спроса без текста (рыночные сигналы), в центре светящийся коннектор из металлических сегментов собирает разрозненные элементы в единую концепцию. Мягкий контровой свет, глубокая резкость, спокойная академическая цветовая палитра с холодными синими и нейтральными серыми тонами. 8K, sharp focus.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/097_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/097_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/097_ideogram.webp"
    }
  },
  {
    goal: "Парка в России: солнечная суббота, легкая облачность, влажные…",
    prompt: "Фотореалистичная сцена парка в России: солнечная суббота, легкая облачность, влажные после дождя дорожки и хвойные деревья. На переднем плане аккуратная петля маршрута с разноцветными спортивными фишками и гимнастическими обручами на траве, рядом деревянная “станция движения” (скакалки, мягкие маты, кегли). Чуть дальше под открытым навесом мастерская: стол из светлого дерева с набором для ремёсел, кисти, заготовки из фанеры, краски без надписей. Кадр с низкой точки, перспектива вдоль дорожек, мягкий дневной свет, естественная цветовая палитра зелёный/бежевый/голубой. Высокая детализация, резкость, 8K, wide shot, без людей, без текста.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/098_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/098_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/098_ideogram.webp"
    }
  },
  {
    goal: "Photorealistic, cinematic, highly detailed 8K, ultra sharp…",
    prompt: "Photorealistic, cinematic, highly detailed 8K, ultra sharp focus, shallow depth of field, clinical calm mood, cool steel-and-ivory palette with vivid urgency accent colors (green, yellow, red), top-left directional soft lighting with gentle specular highlights. Scene: inside a modern Russian university hospital anesthesia workroom, close-up macro framing on a wall-mounted anesthesia workflow status module attached to a stainless-steel medication cart. The module contains a circular, segmented urgency dial with translucent color windows and a vertical LED strip whose segments glow in coordinated colors to indicate process states; there are no readable labels, only purely color-based signals. Surrounding details reinforce “signals that speak by themselves”: neatly coiled silicone tubing with colored protective bands (green/yellow/red) near the dial, a sealed sterile supply compartment with frosted glass, and a small array of color-diffusing indicator lenses arranged around the dial. Composition: extreme close-up, off-center crop focused on the dial face and the nearest glowing LED segment, with the background falling into creamy blur—out-of-focus overhead ceiling panels and pale linoleum flooring hint at a real operating-adjacent corridor without showing people or text. Lighting and color: the red segments cast subtle warm reflections on the metal surface, while green and yellow create soft colored bokeh on the cart’s brushed steel. Camera angle: straight-on to slightly low (5–10 degrees upward), emphasizing the immediacy of the color transitions. Avoid text: ensure every element is label-free; no printed stickers, no icons, no diagram-like markings. The visual metaphor should feel like instant status recognition: the color windows brighten smoothly, implying a process moving from “urgent action” to “pause” to “completed,” without any words. Include realistic materials—powder-coated housing, micro-scratches on stainless steel, anti-fog glass, and faint condensation on nearby sterile packaging—so the image reads as credible clinical equipment. Frame density: tight, tactile, and observational, communicating that team members can infer next steps immediately from color-coded signals alone.",
    thumb: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/099_thumb.webp",
    images: {
      zimage: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/099_sgx.webp",
      ideogram: "https://cdn.poehali.dev/projects/24978873-a7e9-4cb8-89fc-9c43c8a622a4/bucket/compare/099_ideogram.webp"
    }
  },
];
