import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import universityImage from './imports/ChatGPT_Image_19_____._2026__.__17_29_23__6_.png'
import shadImage from './imports/ChatGPT_Image_19_____._2026__.__17_29_22__5_.png'
import bsuImage from './imports/bsu-asobd.png'
import itechartImage from './imports/ChatGPT_Image_19_____._2026__.__17_29_22__4_.png'
import yandexImage from './imports/ChatGPT_Image_19_____._2026__.__17_29_21__3_.png'
import regulaImage from './imports/ChatGPT_Image_19_____._2026__.__17_29_20__2_.png'
import innowiseImage from './imports/innowise-techcoredev.png'
import icpcOutlineImage from './imports/acm-icpc-black-aligned-with-side-frames.png'
import icpcColorImage from './imports/icpc-color-clean.png'
import codeforcesBlackImage from './imports/codeforces-logo-black-transparent.png'
import codeforcesColorImage from './imports/codeforces-logo-color-transparent.png'
import shadBlackImage from './imports/shkola-analiza-dannykh-black-transparent.png'
import shadColorImage from './imports/shkola-analiza-dannykh-color-transparent.png'
import yandexAnimation from './imports/yandex-animation.webp'
import yandexStackNda5 from './imports/yandex-stack-nda-5.png'
import yandexStackNda4 from './imports/yandex-stack-nda-4.png'
import yandexStackNda3 from './imports/yandex-stack-nda-3.png'
import yandexStackNda2 from './imports/yandex-stack-nda-2.png'
import yandexStackNda1 from './imports/yandex-stack-nda-1.png'
import yandexStackGrafana from './imports/yandex-stack-grafana.png'
import yandexStackAirflow from './imports/yandex-stack-airflow.png'
import yandexStackBi from './imports/yandex-stack-bi.png'
import yandexStackPython from './imports/yandex-stack-python.png'
import hobbiesOutroImage from './imports/hobbies-outro.png'

type Mode = 'story' | 'skills'

const icpcDetails = 'ACM ICPC (International Collegiate Programming Contest) — это крупнейшая, старейшая и самая престижная в мире командная олимпиада по спортивному программированию среди студентов. Трижды занимал призовые места на полуфинале ACM ICPC / в финале NEERC ICPC, за что дважды был лауреатом Специального фонда Президента РБ по поддержке талантливой молодежи'
const codeforcesDetails = 'Codeforces - это самая популярная рейтинговая в мире онлайн-платформа для спортивного программирования. После регулярной практики индивидуальных и командных соревнований, изучения и практики теории алгоритмов и структур данных дошёл до уровня "Master".'
const yandexPlatformPoints = [
  'Поддерживал крупнейшую корпоративную платформу хранения данных в Европе — гибрид Data Lake и Lakehouse',
  '60+ ПБ данных в едином контуре',
  '600+ логов и потоков данных',
  '500+ задач — каждая со своими зависимостями и логикой',
  'Отвечал за надёжность поставки данных и поддержку платформы',
]

const regulaOverviewPoints = [
  'PostgreSQL-кластер и DWH. Одновременно и OLAP и OLTP нагрузки',
  'ELT/ELT-процессы и два REST API',
  'Тесты в Dev-окружении и отсутствие CI',
  'Регулярные инциденты, фиксы в проде и релизы несколько раз в день',
]

const regulaSchemaPoints = [
  'Внедрение SQLAlchemy и Alembic с сохранением legacy-компонентов на raw SQL',
  'Версионирование изменений схемы БД через репозиторий',
  'Миграции без прямых вызовов от admin-пользователя',
  'Обратная совместимость и более ранний выпуск изменений',
]

const regulaReleasePoints = [
  'Разделение на dev, test и prod контуры',
  'Изолированность для каждого теста',
  'Релизы по расписанию',
  'Единый процесс для схемы БД, двух REST API и ETL/ELT-пайплайнов',
]

const regulaQualityPoints = [
  'Архитектура unit-тестов и запуск с применением миграций',
  'Интеграция тестов в CI/CD',
  'Рефакторинг и оптимизация SQL-запросов и API-эндпоинтов',
  'Оптимизация и разработка ETL/ELT-пайплайнов',
  'Code review, внутренние стандарты и обучение команды',
]

const regulaDeliveryPoints = [
  'Исследование и создание MVP до начала большого внедрения',
  'Поиск блокеров и проверка решений в тестовом окружении',
  'Согласование изменений с бизнесом и смежными командами',
  'Документация, аудит изменений данных и внедрение LLM-ассистентов в разработку',
]

const regulaAdminPoints = [
  'Тюнинг конфигурации PostgreSQL под рабочую нагрузку',
  'Подготовка баз данных к настройке репликации',
  'Работа с резервными копиями и восстановлением',
  'Рефакторинг хранимых процедур и серверной логики',
  'Добавление первичных ключей',
  'Аудит и оптимизация индексов',
  'Логирование изменений критичных данных',
  'Рефакторинг и оптимизация больших аналитических запросов'
]

const nowProjectPoints = [
  'Разработка MVP и проверка ключевых продуктовых гипотез на первом этапе',
  'Оценка второго этапа: WBS, объём работ и коммерческое предложение',
  'Участие в проектировании решения совместно с BA, PM и Data Analyst',
  'Сбор и профилирование данных из 15+ источников: REST API, ручной ввод и файловые выгрузки',
  'Формирование MDM и построение медальонной архитектуры данных',
  'Все слои хранения и обработки реализованы на ClickHouse',
  'Оркестрация пайплайнов с использованием Apache Airflow',
]

const nowInternshipPoints = [
  'Руководство внутренней стажировкой по направлениям Data Engineering и Data Analytics',
  'Разработка критериев отбора, проведение собеседований и взаимодействие с командой рекрутеров',
  'Подготовка программы обучения и практических заданий для стажёров',
  'Менторинг стажёров и сопровождение их роста',
  'Обучение других менторов и контроль качества работы с участниками программы',
  'Помощь в запуске и организации стажировок для других отделов',
]

const yandexStack = [
  { name: 'Низкоуровневый оркестратор', image: yandexStackNda5, description: 'Проприетарный оркестратор от Yandex. Ближе к Apache Airflow на k8s-экзекьюторе. Использовал редко.' },
  { name: 'Менеджер артефактов', image: yandexStackNda4, description: 'Проприетарный менеджер событий и артефактов. Использовался редко.' },
  { name: 'Высокоуровневый оркестратор', image: yandexStackNda3, description: 'Основной инструмент для разработки ETL/ELT-пайплайнов с богатым функционалом работы с зависимостями (данными разной природы, частоты и гранулярности), возможностью тестирования data-пайплайнов и обеспечением надежности потоков данных. Одной из ключевых особенностей сервиса - наличие невероятно удобного WebUI для работы с DAG\'ами.' },
  { name: 'VSC', image: yandexStackNda1, description: 'Проприетарная распределенная система контроля версий, оптимизированный под огромный монорепозиторий.' },
  { name: 'Message Broker', image: yandexStackNda2, description: 'Чаще всего выступал как источник RT-данных.' },
  { name: 'Grafana', image: yandexStackGrafana, description: 'Мониторинг состояния нагрузок и потоков данных. Являлся частью health dashboard.' },
  { name: 'YTSaurus', image: yandexStackAirflow, description: 'YTSaurus - платформа для распределенного хранения и обработки больших данных (с 2023 г. в open-source).\nВ себе YTSaurus во многом совмещает функционал Apache Iceberg и Spark либо же Hadoop с HDFS, YARN, HIVE, и HBase).\nИспользовал на регулярной основе для обработки данных, оптимизации ETL-пайплайнов, ad-hoc аналитики и работы с метаданными.' },
  { name: 'DataLens', image: yandexStackBi, description: 'BI-инструмент с функционалом и визуальным редактором для создания интерактивных дашбордов с возможностью реализовывать кастомные настраиваемые чарты используя JavaScript и интеграцию с HighCharts, чем регулярно пользовался.' },
  { name: 'Python', image: yandexStackPython, description: 'Разработка ETL-пайплайнов, бэкэнда и ad-hoc аналитика на Pandas.' },
]

const stages = [
  { period: '2016—2020', span: 48, type: 'EDUCATION', place: 'ГрГУ им. Янки Купалы', title: 'Учусь видеть систему', copy: 'Факультет математики и информатики · «Программное обеспечение информационных технологий»', color: '#dfff4f', scene: 'notebook', image: universityImage, featureImage: icpcOutlineImage, featureHoverImage: icpcColorImage, featureAlt: 'ACM International Collegiate Programming Contest', featureLabel: 'ACM ICPC / COMPETITIVE PROGRAMMING', featureDetails: icpcDetails, secondaryFeatureImage: codeforcesBlackImage, secondaryFeatureHoverImage: codeforcesColorImage, bullets: null },
  { period: '2019—2021', span: 24, type: 'EDUCATION', place: 'Школа анализа данных · Яндекс', title: 'Учусь думать данными', copy: 'Направление «Машинное обучение»', color: '#ff7a59', scene: 'study', image: shadImage, featureImage: shadBlackImage, featureHoverImage: shadColorImage, featureAlt: 'Школа анализа данных', featureLabel: 'ШАД / ЯНДЕКС', featureDetails: 'Школа анализа данных — двухгодичная программа по ключевым направлениям Computer Science и совместные магистратуры в технических вузах. Почти каждая лабораторная как курсовая работа в университете с высоким отбором.', secondaryFeatureImage: null, secondaryFeatureHoverImage: null, bullets: [
    'С/С++ от работы с памятью и системного программирования до сетевого и многопоточного взаимодействия',
    'Python от основ до написания своего кастомного интерпретатора',
    'Алгоритмы и структуры данных',
    'ML. Классический подход к машинному обучению с тщательным разбором всевозможных проблем, их решений и теории',
    'NLP. От Word2vec до разбора передовых NLP-моделей на тот момент времени',
    'DL. Изучение, разбор и практика state of the art архитектур на момент 2020-2021 г.',
    'Разделы высшей математики (теория информации, теория вероятности, дискретный анализ)'
  ] },
  { period: '2020—2021', span: 12, type: 'EDUCATION', place: 'БГУ · ФПМИ', title: 'Алгоритмы и системы обработки больших объёмов данных', copy: 'Магистратура', color: '#78cf72', scene: 'study', image: bsuImage, featureImage: null, featureHoverImage: null, featureAlt: null, featureLabel: null, featureDetails: null, secondaryFeatureImage: null, secondaryFeatureHoverImage: null, bullets: ['Параллельно преподавал в БГУИР, БГУ и IT-Academy', 'Средний балл — 9,2', 'Выиграл грант Huawei', 'Отчислился на третьем семестре'] },
  { period: 'JUN 2021—SEP 2022', span: 15, type: 'WORK', place: 'iTechArt', title: 'Система аналитики и мониторинга ресурсов для промышленности', copy: 'Аналитический дашборд для прогнозирования потребления газов и электроэнергии на производственных предприятиях из RT-источников.', color: '#00d6b4', scene: 'single', image: itechartImage, featureImage: null, featureHoverImage: null, featureAlt: null, featureLabel: null, featureDetails: null, secondaryFeatureImage: null, secondaryFeatureHoverImage: null, bullets: [
    'Участвовал в проектировании архитектуры аналитического решения',
    'Разбор и анализ ТЗ, спецификаций, стандартов (на немецком языке)',
    'Использовал AWS Athena для ad-hoc аналитики',
    'Строили аналитику на Tableau',
    'Для обработки данных и прогнозирования временных рядов использовались scikit-learn',
    'Разрабатывал ETL-пайплайны: данные поступали в S3, AWS Lambda запускала AWS Glue джобы на Apache Spark для обработки'
  ] },
  { period: 'SEP 2022—JUL 2024', span: 22, type: 'WORK', place: 'Яндекс · Реклама', title: '', copy: '', color: '#ff3333', scene: 'yandex', image: yandexImage, featureImage: null, featureHoverImage: null, featureAlt: null, featureLabel: null, featureDetails: null, secondaryFeatureImage: null, secondaryFeatureHoverImage: null, bullets: null },
  { period: 'AUG 2024—AUG 2025', span: 12, type: 'WORK', place: 'Regula', title: 'Два экрана глубже', copy: 'Data Engineer · больше масштаба, больше точности, второй монитор для целой картины.', color: '#b36dff', scene: 'regula', image: regulaImage, featureImage: null, featureHoverImage: null, featureAlt: null, featureLabel: null, featureDetails: null, secondaryFeatureImage: null, secondaryFeatureHoverImage: null, bullets: null },
  { period: 'SEP 2025—NOW', span: 13, type: 'WORK', place: 'Innowise / TechCoreDev', title: 'Строю дальше', copy: 'Data Engineer · системы, кофе, два экрана и спокойствие перед сложным пайплайном.', color: '#aeb3b7', scene: 'now', image: innowiseImage, featureImage: null, featureHoverImage: null, featureAlt: null, featureLabel: null, featureDetails: null, secondaryFeatureImage: null, secondaryFeatureHoverImage: null, bullets: null },
]

const timelineNotes = [
  { label: 'ГрГУ им. Янки Купалы · ПОИТ', start: 0, width: 28, stage: 0, row: 0 },
  { label: 'Школа Анализа Данных', start: 28, width: 9, stage: 1, row: 1 },
  { label: 'БГУ · ФПМИ · АСОБД', start: 37, width: 9, stage: 2, row: 2 },
  { label: 'iTechArt · Data Scientist', start: 46, width: 14, stage: 3, row: 0 },
  { label: 'Яндекс · DE / DA', start: 60, width: 20, stage: 4, row: 1 },
  { label: 'Regula · Data Engineer', start: 80, width: 10, stage: 5, row: 0 },
  { label: 'Innowise / TechCoreDev · DE', start: 90, width: 10, stage: 6, row: 2 },
]

export default function App() {
  const [mode, setMode] = useState<Mode>('story')
  const [activeStage, setActiveStage] = useState(0)
  const [hoveredNote, setHoveredNote] = useState<number | null>(null)
  const [isChanging, setIsChanging] = useState(false)
  const [isScienceView, setIsScienceView] = useState(false)
  const [yandexView, setYandexView] = useState(0)
  const [regulaView, setRegulaView] = useState(0)
  const [nowView, setNowView] = useState(0)
  const [isOutroView, setIsOutroView] = useState(false)
  const [isMobileNoticeVisible, setIsMobileNoticeVisible] = useState(true)
  const storyRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const lockRef = useRef(false)
  const isStoryPinnedRef = useRef(false)
  const pinnedScrollYRef = useRef(0)
  const activeStageRef = useRef(0)
  const isScienceViewRef = useRef(false)
  const yandexViewRef = useRef(0)
  const regulaViewRef = useRef(0)
  const nowViewRef = useRef(0)
  const isOutroViewRef = useRef(false)
  const dutyEyesRef = useRef<HTMLDivElement>(null)
  const upwardReleaseDistanceRef = useRef(0)
  const touchStartRef = useRef<number | null>(null)
  const transitionTimerRef = useRef<number | null>(null)
  const stage = stages[activeStage]

  const showScienceView = useCallback((visible: boolean) => {
    isScienceViewRef.current = visible
    setIsScienceView(visible)
  }, [])

  const showYandexView = useCallback((view: number) => {
    yandexViewRef.current = view
    setYandexView(view)
  }, [])

  const showRegulaView = useCallback((view: number) => {
    regulaViewRef.current = view
    setRegulaView(view)
  }, [])

  const showNowView = useCallback((view: number) => {
    nowViewRef.current = view
    setNowView(view)
  }, [])

  const showOutroView = useCallback((visible: boolean) => {
    isOutroViewRef.current = visible
    setIsOutroView(visible)
  }, [])

  const goToStage = useCallback((index: number) => {
    if (index === activeStageRef.current) {
      if (index === 0) showScienceView(false)
      if (index === 4) showYandexView(0)
      if (index === 5) showRegulaView(0)
      if (index === 6) showNowView(0)
      if (index === stages.length - 1) showOutroView(false)
      return
    }
    setIsChanging(true)
    if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current)
    transitionTimerRef.current = window.setTimeout(() => {
      activeStageRef.current = index
      setActiveStage(index)
      if (index !== 0) showScienceView(false)
      if (index !== 4) showYandexView(0)
      if (index !== 5) showRegulaView(0)
      if (index !== 6) showNowView(0)
      if (index !== stages.length - 1) showOutroView(false)
      setIsChanging(false)
    }, 120)
  }, [showNowView, showOutroView, showRegulaView, showScienceView, showYandexView])

  const releaseStory = useCallback(() => {
    isStoryPinnedRef.current = false
    upwardReleaseDistanceRef.current = 0
    document.documentElement.classList.remove('story-pinned')
  }, [])

  const openSection = useCallback((nextMode: Mode) => {
    releaseStory()
    showOutroView(false)
    setMode(nextMode)
    window.requestAnimationFrame(() => {
      const target = nextMode === 'story' ? storyRef.current : skillsRef.current
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [releaseStory, showOutroView])

  const backToMenu = useCallback(() => {
    releaseStory()
    showOutroView(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [releaseStory, showOutroView])

  const stepStory = useCallback((direction: -1 | 1) => {
    if (lockRef.current) return

    const movingForward = direction > 0
    const current = activeStageRef.current
    let transitionDelay = 460
    let didMove = true

    if (current === 0 && movingForward && !isScienceViewRef.current) {
      showScienceView(true)
      transitionDelay = 900
    } else if (current === 0 && !movingForward && isScienceViewRef.current) {
      showScienceView(false)
      transitionDelay = 900
    } else if (current === 0 && !movingForward) {
      didMove = false
    } else if (current === 1 && !movingForward) {
      showScienceView(true)
      goToStage(0)
      transitionDelay = 900
    } else if (current === 4 && movingForward && yandexViewRef.current < 5) {
      showYandexView(yandexViewRef.current + 1)
      transitionDelay = 900
    } else if (current === 4 && !movingForward && yandexViewRef.current > 0) {
      showYandexView(yandexViewRef.current - 1)
      transitionDelay = 900
    } else if (current === 5 && movingForward && regulaViewRef.current < 5) {
      showRegulaView(regulaViewRef.current + 1)
      transitionDelay = 900
    } else if (current === 5 && !movingForward && regulaViewRef.current > 0) {
      showRegulaView(regulaViewRef.current - 1)
      transitionDelay = 900
    } else if (current === 5 && !movingForward) {
      showYandexView(5)
      goToStage(4)
      transitionDelay = 900
    } else if (current === 6 && movingForward && !isOutroViewRef.current && nowViewRef.current < 1) {
      showNowView(nowViewRef.current + 1)
      transitionDelay = 900
    } else if (current === 6 && !movingForward && !isOutroViewRef.current && nowViewRef.current > 0) {
      showNowView(nowViewRef.current - 1)
      transitionDelay = 900
    } else if (current === 6 && !movingForward && !isOutroViewRef.current) {
      showRegulaView(5)
      goToStage(5)
      transitionDelay = 900
    } else if (current === stages.length - 1 && movingForward && !isOutroViewRef.current) {
      showOutroView(true)
      transitionDelay = 900
    } else if (current === stages.length - 1 && !movingForward && isOutroViewRef.current) {
      showOutroView(false)
      transitionDelay = 900
    } else if (current === stages.length - 1 && movingForward && isOutroViewRef.current) {
      didMove = false
    } else {
      const next = Math.max(0, Math.min(stages.length - 1, current + direction))
      if (next === current) didMove = false
      else goToStage(next)
    }

    if (!didMove) return
    lockRef.current = true
    window.setTimeout(() => { lockRef.current = false }, transitionDelay)
  }, [goToStage, showNowView, showOutroView, showRegulaView, showScienceView, showYandexView])

  useEffect(() => {
    if (activeStage !== 4 || yandexView !== 2) return
    const eyes = dutyEyesRef.current
    if (!eyes) return

    const followPointer = (event: PointerEvent) => {
      const rect = eyes.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      const distance = Math.hypot(dx, dy) || 1
      const strength = Math.min(16, distance * .055)
      eyes.style.setProperty('--pupil-x', `${dx / distance * strength}px`)
      eyes.style.setProperty('--pupil-y', `${dy / distance * strength}px`)
    }

    window.addEventListener('pointermove', followPointer, { passive: true })
    return () => window.removeEventListener('pointermove', followPointer)
  }, [activeStage, yandexView])

  useEffect(() => {
    const node = storyRef.current
    if (!node || mode !== 'story') return

    const scrollInstantly = (top: number) => {
      const root = document.documentElement
      const previousBehavior = root.style.scrollBehavior
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, top)
      root.style.scrollBehavior = previousBehavior
    }

    const pinStory = () => {
      const rect = node.getBoundingClientRect()
      pinnedScrollYRef.current = window.scrollY + rect.top
      isStoryPinnedRef.current = true
      document.documentElement.classList.add('story-pinned')
      scrollInstantly(pinnedScrollYRef.current)
    }

    const moveStory = (delta: number, event: Event) => {
      const movingDown = delta > 0

      if (isStoryPinnedRef.current) {
        const current = activeStageRef.current
        if (!movingDown && current === 0 && !isScienceViewRef.current && Math.abs(delta) >= 8) {
          event.preventDefault()
          scrollInstantly(pinnedScrollYRef.current)
          upwardReleaseDistanceRef.current += Math.abs(delta)
          if (upwardReleaseDistanceRef.current >= 260) releaseStory()
          return
        }

        event.preventDefault()
        scrollInstantly(pinnedScrollYRef.current)
        if (movingDown || current !== 0 || isScienceViewRef.current) upwardReleaseDistanceRef.current = 0
        if (Math.abs(delta) < 8 || lockRef.current) return

        lockRef.current = true
        let transitionDelay = 460
        if (current === 0 && movingDown && !isScienceViewRef.current) {
          showScienceView(true)
          transitionDelay = 900
        } else if (current === 0 && !movingDown && isScienceViewRef.current) {
          showScienceView(false)
          transitionDelay = 900
        } else if (current === 1 && !movingDown) {
          showScienceView(true)
          goToStage(0)
          transitionDelay = 900
        } else if (current === 4 && movingDown && yandexViewRef.current < 5) {
          showYandexView(yandexViewRef.current + 1)
          transitionDelay = 900
        } else if (current === 4 && !movingDown && yandexViewRef.current > 0) {
          showYandexView(yandexViewRef.current - 1)
          transitionDelay = 900
        } else if (current === 5 && movingDown && regulaViewRef.current < 5) {
          showRegulaView(regulaViewRef.current + 1)
          transitionDelay = 900
        } else if (current === 5 && !movingDown && regulaViewRef.current > 0) {
          showRegulaView(regulaViewRef.current - 1)
          transitionDelay = 900
        } else if (current === 5 && !movingDown) {
          showYandexView(5)
          goToStage(4)
          transitionDelay = 900
        } else if (current === 6 && movingDown && !isOutroViewRef.current && nowViewRef.current < 1) {
          showNowView(nowViewRef.current + 1)
          transitionDelay = 900
        } else if (current === 6 && !movingDown && !isOutroViewRef.current && nowViewRef.current > 0) {
          showNowView(nowViewRef.current - 1)
          transitionDelay = 900
        } else if (current === 6 && !movingDown && !isOutroViewRef.current) {
          showRegulaView(5)
          goToStage(5)
          transitionDelay = 900
        } else if (current === stages.length - 1 && movingDown && !isOutroViewRef.current) {
          showOutroView(true)
          transitionDelay = 900
        } else if (current === stages.length - 1 && !movingDown && isOutroViewRef.current) {
          showOutroView(false)
          transitionDelay = 900
        } else {
          const next = Math.max(0, Math.min(stages.length - 1, current + (movingDown ? 1 : -1)))
          if (next !== current) goToStage(next)
        }
        window.setTimeout(() => { lockRef.current = false }, transitionDelay)
        return
      }

      if (Math.abs(delta) < 8 || lockRef.current) return
      const rect = node.getBoundingClientRect()
      const isCrossingIntoStory = movingDown && rect.top > 0 && rect.top < Math.min(180, window.innerHeight * .24)
      const isInsideStory = rect.top <= 4 && rect.bottom >= window.innerHeight * .72

      if (isCrossingIntoStory || isInsideStory) {
        if (!movingDown && activeStageRef.current === 0) return
        event.preventDefault()
        pinStory()
        lockRef.current = true
        let transitionDelay = 460
        if (!isCrossingIntoStory) {
          const current = activeStageRef.current
          if (current === 0 && movingDown && !isScienceViewRef.current) {
            showScienceView(true)
            transitionDelay = 900
          } else if (current === 4 && movingDown && yandexViewRef.current < 5) {
            showYandexView(yandexViewRef.current + 1)
            transitionDelay = 900
          } else if (current === 4 && !movingDown && yandexViewRef.current > 0) {
            showYandexView(yandexViewRef.current - 1)
            transitionDelay = 900
          } else if (current === 5 && movingDown && regulaViewRef.current < 5) {
            showRegulaView(regulaViewRef.current + 1)
            transitionDelay = 900
          } else if (current === 5 && !movingDown && regulaViewRef.current > 0) {
            showRegulaView(regulaViewRef.current - 1)
            transitionDelay = 900
          } else if (current === 5 && !movingDown) {
            showYandexView(5)
            goToStage(4)
            transitionDelay = 900
          } else if (current === 6 && movingDown && !isOutroViewRef.current && nowViewRef.current < 1) {
            showNowView(nowViewRef.current + 1)
            transitionDelay = 900
          } else if (current === 6 && !movingDown && !isOutroViewRef.current && nowViewRef.current > 0) {
            showNowView(nowViewRef.current - 1)
            transitionDelay = 900
          } else if (current === 6 && !movingDown && !isOutroViewRef.current) {
            showRegulaView(5)
            goToStage(5)
            transitionDelay = 900
          } else if (current === stages.length - 1 && movingDown && !isOutroViewRef.current) {
            showOutroView(true)
            transitionDelay = 900
          } else if (current === stages.length - 1 && !movingDown && isOutroViewRef.current) {
            showOutroView(false)
            transitionDelay = 900
          } else {
            const next = Math.max(0, Math.min(stages.length - 1, current + (movingDown ? 1 : -1)))
            if (next !== current) goToStage(next)
          }
        }
        window.setTimeout(() => { lockRef.current = false }, transitionDelay)
      }
    }

    const handleWheel = (event: WheelEvent) => moveStory(event.deltaY, event)
    const handleTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null
    }
    const handleTouchMove = (event: TouchEvent) => {
      const start = touchStartRef.current
      const current = event.touches[0]?.clientY
      if (start == null || current == null || Math.abs(start - current) < 34) return
      moveStory(start - current, event)
      touchStartRef.current = current
    }
    const holdPinnedPosition = () => {
      if (isStoryPinnedRef.current && Math.abs(window.scrollY - pinnedScrollYRef.current) > .5) {
        scrollInstantly(pinnedScrollYRef.current)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('scroll', holdPinnedPosition, { passive: true })
    return () => {
      releaseStory()
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('scroll', holdPinnedPosition)
    }
  }, [goToStage, mode, releaseStory, showNowView, showOutroView, showRegulaView, showScienceView, showYandexView])

  useEffect(() => () => {
    if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current)
  }, [])

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f9f9f6] text-[#111111] selection:bg-[#dfff4f]">
      {isMobileNoticeVisible && (
        <aside className="mobile-screen-notice" role="status">
          <div>
            <strong>ЛУЧШЕ НА ШИРОКОМ ЭКРАНЕ</strong>
            <p>На телефоне всё работает, но полная версия резюме раскрывается на ноутбуке или мониторе.</p>
          </div>
          <button type="button" onClick={() => setIsMobileNoticeVisible(false)} aria-label="Закрыть уведомление">×</button>
        </aside>
      )}
      <div className="landing-screen">
        <header className="relative z-20 flex items-center justify-between border-b border-black px-5 py-4 md:px-10">
          <a href="#top" className="group flex items-center gap-2 font-mono text-[11px] font-bold tracking-[.18em]">
            <span className="grid h-6 w-6 place-items-center rounded-full border border-black transition-transform group-hover:rotate-90">↗</span>
            ARSENIY / DATA ENGINEER
          </a>
          <div className="header-contacts" aria-label="Контакты">
            <span>СВЯЗАТЬСЯ</span>
            <a href="https://www.linkedin.com/in/arseniy-kolosov-a831a6170/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://t.me/bubuntu" target="_blank" rel="noreferrer">TELEGRAM</a>
          </div>
        </header>

        <section id="top" className="landing-hero relative px-5 py-8 md:px-10 md:py-10">
          <div className="grid grid-cols-12 gap-x-5">
            <p className="col-span-12 mb-8 font-mono text-[10px] tracking-[.18em] text-black/60 md:col-span-2 md:mb-0">[ РЕЗЮМЕ / 2026 ]</p>
            <div className="col-span-12 md:col-span-10">
              <h1 className="max-w-5xl font-display text-[16vw] font-medium leading-[.77] tracking-[-.09em] sm:text-[110px] lg:text-[148px]">
                ДАННЫЕ<br/><span className="ml-[.13em]">В</span> ДВИЖЕНИИ<span className="text-[#ff5a3d]">.</span>
              </h1>
            </div>
          </div>
          <div className="landing-meta grid grid-cols-12 border-t border-black pt-4">
            <p className="col-span-9 max-w-md text-sm leading-5 md:col-span-4"></p>
            <p className="col-span-3 text-right font-mono text-[10px] leading-4 tracking-wider">MINSK<br/>OFFICE / REMOTE / UTC+3</p>
          </div>
        </section>

        <nav className="landing-navigation flex border-y border-black" aria-label="Режим просмотра">
          {(['story', 'skills'] as Mode[]).map((item, index) => (
            <button key={item} onClick={() => openSection(item)} className={`group relative flex flex-1 items-center justify-between px-5 py-4 text-left transition-colors md:px-10 md:py-5 ${mode === item ? 'bg-black text-white' : 'hover:bg-[#dfff4f]'} ${index === 0 ? 'border-r border-black' : ''}`}>
              <span className="font-mono text-[10px] tracking-[.16em]">0{index + 1}</span>
              <span className="font-display text-2xl tracking-[-.04em] md:text-3xl">{item === 'story' ? 'История' : 'Инструменты'}</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
            </button>
          ))}
        </nav>
      </div>

      {mode === 'story' ? (
        <section ref={storyRef} style={{ '--active-color': stage.color } as CSSProperties} className={`presentation-section relative min-h-[680px] overflow-hidden border-b border-black px-5 pb-8 pt-[76px] md:min-h-[710px] md:px-10 md:pb-10 md:pt-[82px] ${isOutroView ? 'outro-view' : ''}`}>
          <div className="presentation-bar" aria-label="Навигация по резюме">
            <button onClick={backToMenu} className="presentation-home"><span aria-hidden="true">↑</span> НА ГЛАВНУЮ</button>
            <div className="presentation-switcher">
              <button className="active" aria-current="page">ТАЙМЛАЙН</button>
              <button onClick={() => openSection('skills')}>СТЕК</button>
            </div>
            <div className="header-contacts presentation-contacts" aria-label="Контакты">
              <span>СВЯЗАТЬСЯ</span>
              <a href="https://www.linkedin.com/in/arseniy-kolosov-a831a6170/" target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href="https://t.me/bubuntu" target="_blank" rel="noreferrer">TELEGRAM</a>
            </div>
          </div>
          <button type="button" className="story-edge-nav story-edge-nav-prev" onClick={() => stepStory(-1)} disabled={activeStage === 0 && !isScienceView} aria-label="Предыдущий слайд"><span aria-hidden="true">‹</span></button>
          <button type="button" className="story-edge-nav story-edge-nav-next" onClick={() => stepStory(1)} disabled={activeStage === stages.length - 1 && isOutroView} aria-label="Следующий слайд"><span aria-hidden="true">›</span></button>
          <div className="story-kicker relative z-10 flex items-start justify-between font-mono text-[10px] tracking-[.16em] text-black/55"><p>CAREER FILM / 01—{String(stages.length).padStart(2, '0')}</p><p className="hidden md:block">SCROLL TO MOVE THROUGH TIME</p></div>
          <div className={`story-film ${isChanging ? 'changing' : ''} ${isScienceView ? 'science-view' : ''} ${yandexView === 1 ? 'yandex-stack-view' : ''} ${yandexView === 2 ? 'yandex-duty-view' : ''} ${yandexView === 3 ? 'yandex-optimization-view' : ''} ${yandexView === 4 ? 'yandex-animation-view' : ''} ${yandexView === 5 ? 'yandex-python-view' : ''} ${activeStage === 5 ? `regula-film regula-view-${regulaView}` : ''} ${activeStage === 6 ? 'now-project-film' : ''}`}>
            <div className={`story-copy ${stage.featureImage ? 'story-copy-feature' : ''} ${activeStage === 3 ? 'story-copy-project' : ''}`}>
              {stage.featureImage ? (
                <>
                  <div className={`feature-experience ${activeStage === 1 ? 'compact-feature' : ''}`} tabIndex={0} aria-label={`Подробнее: ${stage.featureAlt ?? stage.place}`}>
                    <div className="feature-visual">
                      <img className="feature-image feature-image-default" src={stage.featureImage} alt={stage.featureAlt ?? ''} />
                      {stage.featureHoverImage && <img className="feature-image feature-image-hover" src={stage.featureHoverImage} alt="" aria-hidden="true" />}
                    </div>
                    <aside className="feature-popover">
                      <p className="feature-popover-label">{stage.featureLabel}</p>
                      <p>{stage.featureDetails}</p>
                    </aside>
                  </div>
                  <p className="place feature-place">{stage.place}</p>
                  <p className="description feature-description">{stage.copy}</p>
                </>
              ) : activeStage === 2 ? (
                <div className="degree-copy">
                  <h2 className="degree-title">{stage.title}</h2>
                  <p className="place degree-place">{stage.place}</p>
                  <p className="description">{stage.copy}</p>
                </div>
              ) : activeStage === 3 ? (
                <div className="project-copy">
                  <p className="project-role">DATA SCIENTIST · ПЕРВЫЙ КОММЕРЧЕСКИЙ ПРОЕКТ</p>
                  <h2 className="project-title">{stage.title}</h2>
                  <p className="description">{stage.copy}</p>
                </div>
              ) : activeStage === 4 ? (
                <div className="yandex-copy">
                  {yandexView === 5 ? (
                    <div className="yandex-python-slide">
                      <div className="yandex-python-heading">
                        <p className="yandex-python-kicker">LEGACY MIGRATION · DAG + DEPENDENCIES</p>
                        <div className="yandex-python-versions" aria-label="Переход с Python 2 на Python 3">
                          <span>PYTHON 2</span>
                          <b>→</b>
                          <span>PYTHON 3</span>
                        </div>
                        <p className="place yandex-place">{stage.place}</p>
                      </div>
                      <ul className="yandex-python-points">
                        <li>Декомпозиция миграции DAG’а с Python2 на Python3 на отдельные задачи и Python-зависимости с определением безопасного порядка перевода</li>
                        <li>Ручной перевод части задач и библиотек для выявления повторяющихся проблем и основных паттернов миграции</li>
                        <li>Regexp-based скрипты для автоматизации массовых типовых изменений по принципу Парето</li>
                        <li>Делегирование и координация перевода задач с ответственными из других команд</li>
                        <li>Автоматизированное отслеживание прогресса через дашборд, синхронизированный с prod-окружением</li>
                      </ul>
                    </div>
                  ) : yandexView === 4 ? (
                    <div className="yandex-animation-slide">
                      <div className="yandex-animation-media">
                        <img className="yandex-animation" src={yandexAnimation} alt="Анимация потока данных Яндекс Рекламы" />
                        <p className="place yandex-place">{stage.place}</p>
                      </div>
                      <div className="yandex-migration-copy">
                        <h3>Миграция DAG'а<br/>с одного ДЦ в другой</h3>
                        <ul>
                          <li>Контроль и выявление списка источников, а также ведение переговоров об их миграции для части источников</li>
                          <li>Миграция путём направления RT-источников одновременно в старый и новый ДЦ</li>
                          <li>Отбор и перенос части исторических данных по шине из старого ДЦ в новый</li>
                        </ul>
                      </div>
                    </div>
                  ) : yandexView === 3 ? (
                    <div className="yandex-optimization-slide">
                      <div className="yandex-optimization-heading">
                        <p className="yandex-optimization-kicker">PERFORMANCE · CAPACITY · COST</p>
                        <h2>ОПТИМИЗАЦИЯ</h2>
                        <p className="place yandex-place">{stage.place}</p>
                      </div>
                      <ul className="yandex-optimization-points">
                        <li>
                          <p>Реализация и поддержка дашборда мониторинга CPU/RAM регулярных процессов и выявления узких мест</p>
                          <strong>ЕЖЕДНЕВНАЯ ЭКОНОМИЯ<br/>≈6000 CPU-ЧАСОВ<br/>≈8000 ГБ RAM</strong>
                        </li>
                        <li>
                          <p>Мониторинг дискового пространства, оптимизация сжатия, декомпозиция CPU и прогнозирование потребления для настройки TTL</p>
                          <strong>ВЫСВОБОЖДЕНО 10+ ПБ ДИСКОВОГО ПРОСТРАНСТВА</strong>
                        </li>
                        <li>
                          <p>Первое место во внутреннем хакатоне по оптимизации ресурсов</p>
                          <strong>1 МЕСТО</strong>
                        </li>
                        <li>
                          <p>Поддержка созданных дашбордов и развитие их до внутренних продуктов для других команд</p>
                        </li>
                      </ul>
                    </div>
                  ) : yandexView === 2 ? (
                    <div className="yandex-duty-slide">
                      <p className="yandex-duty-kicker">ON-CALL · SYSTEM WATCH</p>
                      <div className="yandex-duty-eyes" ref={dutyEyesRef} aria-label="Два глаза следят за указателем мыши">
                        <div className="yandex-eye"><span className="yandex-pupil" /></div>
                        <div className="yandex-eye"><span className="yandex-pupil" /></div>
                      </div>
                      <div className="yandex-duty-bottom">
                        <div className="yandex-duty-heading">
                          <h2>ДЕЖУРСТВО</h2>
                          <p className="place yandex-place">{stage.place}</p>
                        </div>
                        <ul className="yandex-duty-points">
                          <li>Обнаружение и устранение инцидентов</li>
                          <li>Code Review</li>
                          <li>Релизы по расписанию или необходимостью</li>
                          <li>Поиск и информирование ответственных</li>
                        </ul>
                      </div>
                    </div>
                  ) : yandexView === 1 ? (
                    <div className="yandex-stack-slide">
                      <div className="yandex-stack-heading">
                        <h2>СТЕК</h2>
                        <p className="place yandex-place">{stage.place}</p>
                      </div>
                      <div className="yandex-stack-grid">
                        {yandexStack.map((item, index) => (
                          <div className="yandex-stack-item" tabIndex={0} key={item.name} style={{ animationDelay: `${0.12 + index * 0.06}s` }}>
                            <img src={item.image} alt={item.name} />
                            <aside className="yandex-stack-tooltip">
                              <strong>{item.name}</strong>
                              <p>{item.description}</p>
                            </aside>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="yandex-overview">
                      <p className="yandex-overview-kicker">DATA PLATFORM · RELIABILITY</p>
                      <ul className="yandex-overview-points">
                        {yandexPlatformPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.22 + Math.floor(index / 2) * 0.32}s` }}>{point}</li>)}
                      </ul>
                      <p className="place yandex-place">{stage.place}</p>
                    </div>
                  )}
                </div>
              ) : activeStage === 5 ? (
                <div className="regula-copy">
                  {regulaView === 5 ? (
                    <div className="regula-slide regula-admin-slide">
                      <div className="regula-heading">
                        <p className="regula-kicker">DATABASE OPERATIONS · POSTGRESQL</p>
                        <h2>POSTGRES<br/>ADMIN</h2>
                        <p className="place company-place">{stage.place}</p>
                      </div>
                      <div className="regula-admin-board">
                        <p className="regula-admin-command">arseniy@regula:~/postgres$ cat responsibilities.log</p>
                        <ol>
                          {regulaAdminPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.16 + index * 0.1}s` }}><span>{String(index + 1).padStart(2, '0')}</span>{point}</li>)}
                        </ol>
                        <p className="regula-admin-input">arseniy@regula:~/postgres$</p>
                      </div>
                    </div>
                  ) : regulaView === 4 ? (
                    <div className="regula-slide regula-delivery-slide">
                      <div className="regula-heading">
                        <p className="regula-kicker">RESEARCH · ALIGNMENT · DELIVERY</p>
                        <h2>ОТ ИДЕИ<br/>ДО PROD</h2>
                        <p className="place company-place">{stage.place}</p>
                      </div>
                      <div className="regula-delivery-flow" aria-label="Путь от исследования до внедрения">
                        {['ИССЛЕДОВАНИЕ', 'MVP', 'БЛОКЕРЫ', 'СОГЛАСОВАНИЕ', 'ВНЕДРЕНИЕ'].map((item, index) => <div key={item} style={{ animationDelay: `${0.12 + index * 0.12}s` }}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>)}
                      </div>
                      <ul className="regula-points regula-delivery-points">
                        {regulaDeliveryPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.34 + Math.floor(index / 2) * 0.26}s` }}>{point}</li>)}
                      </ul>
                    </div>
                  ) : regulaView === 3 ? (
                    <div className="regula-slide regula-quality-slide">
                      <div className="regula-heading">
                        <p className="regula-kicker">TESTS · REVIEW · REFACTORING</p>
                        <h2>КАЧЕСТВО<br/>ПО УМОЛЧАНИЮ</h2>
                        <p className="place company-place">{stage.place}</p>
                      </div>
                      <div className="regula-quality-core" aria-hidden="true">
                        <strong>PROD</strong>
                        <span>UNIT TESTS</span><span>CI/CD</span><span>CODE REVIEW</span><span>DOCS</span>
                      </div>
                      <ul className="regula-points regula-quality-points">
                        {regulaQualityPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.3 + Math.floor(index / 2) * 0.28}s` }}>{point}</li>)}
                      </ul>
                    </div>
                  ) : regulaView === 2 ? (
                    <div className="regula-slide regula-release-slide">
                      <div className="regula-heading">
                        <p className="regula-kicker">RELEASE ENGINEERING</p>
                        <h2>DEV → TEST<br/>→ PROD</h2>
                        <p className="place company-place">{stage.place}</p>
                      </div>
                      <div className="regula-environments" aria-label="Релизный конвейер">
                        {['DEV', 'TEST', 'PROD'].map((item, index) => <div key={item} className={index === 2 ? 'active' : ''}><span>0{index + 1}</span><strong>{item}</strong><small>{index === 0 ? 'POOL' : index === 1 ? 'EACH COMMIT' : 'RELEASE'}</small></div>)}
                      </div>
                      <ul className="regula-points regula-release-points">
                        {regulaReleasePoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.34 + Math.floor(index / 2) * 0.28}s` }}>{point}</li>)}
                      </ul>
                    </div>
                  ) : regulaView === 1 ? (
                    <div className="regula-slide regula-schema-slide">
                      <div className="regula-heading">
                        <p className="regula-kicker">DATABASE CHANGE MANAGEMENT</p>
                        <h2>СХЕМА БД<br/>КАК КОД</h2>
                        <p className="place company-place">{stage.place}</p>
                      </div>
                      <div className="regula-schema-flow" aria-label="Переход от raw SQL к управляемым миграциям">
                        <div><span>LEGACY</span><strong>RAW SQL</strong></div><b>+</b><div className="accent"><span>ORM</span><strong>SQLALCHEMY</strong></div><b>→</b><div className="accent"><span>MIGRATIONS</span><strong>ALEMBIC</strong></div><b>→</b><div><span>PIPELINE</span><strong>CI/CD</strong></div>
                      </div>
                      <ul className="regula-points regula-schema-points">
                        {regulaSchemaPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.3 + Math.floor(index / 2) * 0.28}s` }}>{point}</li>)}
                      </ul>
                    </div>
                  ) : (
                    <div className="regula-slide regula-overview-slide">
                      <div className="regula-heading">
                        <p className="regula-kicker">ENGINEERING MATURITY · RELIABILITY</p>
                        <h2>ОТ РУЧНОГО<br/>УПРАВЛЕНИЯ —<br/>К СИСТЕМЕ</h2>
                        <p className="place company-place">{stage.place}</p>
                      </div>
                      <ul className="regula-overview-grid">
                        {regulaOverviewPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.2 + index * 0.14}s` }}><span>0{index + 1}</span>{point}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ) : activeStage === 6 ? (
                <div className="now-project-slide">
                  {nowView === 1 ? (
                    <div className="now-internal-slide">
                      <div className="now-internal-heading">
                        <p className="now-project-kicker">INTERNAL PROGRAM · HIRING · MENTORING</p>
                        <h2>СТАЖИРОВКА<br/>DE + DA</h2>
                        <p className="place company-place">{stage.place}</p>
                        <p className="now-project-description">От отбора кандидатов до выпуска: программа, менторы и масштабирование стажировки на другие отделы.</p>
                      </div>
                      <ul className="now-internal-points">
                        {nowInternshipPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.2 + Math.floor(index / 2) * 0.28}s` }}>{point}</li>)}
                      </ul>
                      <div className="now-presales-card">
                        <span>PRE-SALES / OUTSOURCE</span>
                        <strong>WBS · КП</strong>
                        <p>Подготовка оценок, коммерческих предложений и сопроводительных материалов для аутсорсных проектов.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="now-project-heading">
                        <p className="now-project-kicker">EXECUTIVE DASHBOARDS · END-TO-END DELIVERY</p>
                        <h2>ОТ MVP И WBS —<br/>ДО PROD-<br/>ДАШБОРДОВ</h2>
                        <p className="place company-place">{stage.place}</p>
                        <p className="now-project-description">Проектирование и разработка системы управленческих дашбордов для топ-менеджмента заказчика.</p>
                      </div>
                      <ul className="now-project-points">
                        {nowProjectPoints.map((point, index) => <li key={point} style={{ animationDelay: `${0.24 + Math.floor(index / 2) * 0.3}s` }}>{point}</li>)}
                      </ul>
                    </>
                  )}
                </div>
              ) : <><h2>{stage.title}</h2><p className={`place ${activeStage >= 5 ? 'company-place' : ''}`}>{stage.place}</p><p className="description">{stage.copy}</p></>}
            </div>
            {stage.secondaryFeatureImage && (
              <div className="secondary-feature" tabIndex={0} aria-label="Подробнее о Codeforces">
                <div className="secondary-feature-visual">
                  <img className="secondary-feature-image secondary-feature-image-default" src={stage.secondaryFeatureImage} alt="Codeforces" />
                  {stage.secondaryFeatureHoverImage && <img className="secondary-feature-image secondary-feature-image-hover" src={stage.secondaryFeatureHoverImage} alt="" aria-hidden="true" />}
                </div>
                <aside className="secondary-feature-popover">
                  <p className="feature-popover-label">CODEFORCES / COMPETITIVE PROGRAMMING</p>
                  <p>{codeforcesDetails}</p>
                </aside>
              </div>
            )}
            {activeStage === 0 && stage.featureImage && (
              <>
                <div className="science-reveal" aria-hidden={!isScienceView}>НАУЧНАЯ<br/>ДЕЯТЕЛЬНОСТЬ</div>
                <ul className="science-points" aria-hidden={!isScienceView}>
                  <li>Научные работы по генетическим алгоритмам;</li>
                  <li>Научные работы по роевым алгоритмам (в частности метот роя частиц) в качестве оптимизатора для нейронных сетей;</li>
                  <li>Разработка многопоточных алгоритмов под GPU на C/C++ OpenCL.</li>
                </ul>
              </>
            )}
            {stage.bullets && (
              <ul className={`stage-points ${activeStage === 1 ? 'stage-points-shad' : ''} ${activeStage === 3 ? 'stage-points-itech' : ''}`} key={`points-${activeStage}`}>
                {stage.bullets.map((point, index) => <li key={point} style={{ animationDelay: `${0.26 + Math.floor(index / 2) * 0.32}s` }}>{point}</li>)}
              </ul>
            )}
            {activeStage === 3 && <div className="itechart-mark" aria-label="iTechArt">iTechArt</div>}
          </div>
          <div className="career-portrait">
            <img className="portrait-image" src={stage.image} alt={`Иллюстрация: ${stage.place}`} />
          </div>
          <div className="outro-reveal" aria-hidden={!isOutroView}>
            <img className="outro-image" src={hobbiesOutroImage} alt="Кулинария, настольные игры и Factorio — хобби автора" />
            <div className="outro-copy">
              <div className="outro-heading">
                <p>[ OFFLINE / AFTER HOURS ]</p>
                <h2>ВНЕ<br/>РАБОТЫ</h2>
              </div>
              <ul className="outro-hobby-points">
                <li>
                  <span>01 / КУЛИНАРИЯ</span>
                  <p>Выпечка, десерты, горячее и холодное - почти любая кухня мира</p>
                </li>
                <li>
                  <span>02 / D&amp;D</span>
                  <p>Командные истории, импровизация и отыгрыш.</p>
                </li>
                <li>
                  <span>03 / FACTORIO</span>
                  <p>Фабрики, логистика, автоматизация и оптимизация процессов - не только на работе</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="story-timeline" aria-label="Хронология карьеры">
            <div className="timeline-track">{timelineNotes.map((item, index) => <button onClick={() => goToStage(item.stage)} onMouseEnter={() => setHoveredNote(index)} onMouseLeave={() => setHoveredNote(null)} key={item.label} style={{ '--segment-color': stages[item.stage].color, '--segment-start': `${item.start}%`, '--segment-width': `${item.width}%` } as CSSProperties} className={`timeline-segment ${activeStage === item.stage || hoveredNote === index ? 'active' : ''}`} aria-label={item.label} />)}</div>
            <div className="timeline-notes">{timelineNotes.map((item, index) => <button key={item.label} onClick={() => goToStage(item.stage)} onMouseEnter={() => setHoveredNote(index)} onMouseLeave={() => setHoveredNote(null)} style={{ '--note-start': `${item.start}%`, '--note-width': `${item.width}%`, '--note-row': item.row, '--note-color': stages[item.stage].color } as CSSProperties} className={`timeline-note ${activeStage === item.stage || hoveredNote === index ? 'active' : ''}`}><small>{stages[item.stage].period}</small><span>{item.label}</span></button>)}</div>
            <p className="font-mono text-[9px] tracking-wider text-black/50">CLICK A PERIOD TO JUMP · SCROLL TO PLAY</p>
          </div>
        </section>
      ) : (
        <section ref={skillsRef} style={{ '--active-color': '#dfff4f' } as CSSProperties} className="presentation-section relative min-h-[650px] overflow-hidden border-b border-black px-5 pb-10 pt-[82px] md:min-h-[690px] md:px-10 md:pb-14 md:pt-[90px]">
          <div className="presentation-bar" aria-label="Навигация по резюме">
            <button onClick={backToMenu} className="presentation-home"><span aria-hidden="true">↑</span> НА ГЛАВНУЮ</button>
            <div className="presentation-switcher">
              <button onClick={() => openSection('story')}>ТАЙМЛАЙН</button>
              <button className="active" aria-current="page">СТЕК</button>
            </div>
            <div className="header-contacts presentation-contacts" aria-label="Контакты">
              <span>СВЯЗАТЬСЯ</span>
              <a href="https://www.linkedin.com/in/arseniy-kolosov-a831a6170/" target="_blank" rel="noreferrer">LINKEDIN</a>
              <a href="https://t.me/bubuntu" target="_blank" rel="noreferrer">TELEGRAM</a>
            </div>
          </div>
          <div className="grid min-h-[510px] place-items-center text-center">
            <div>
              <p className="mb-5 font-mono text-[9px] tracking-[.2em] text-black/50">[ STACK / SOON ]</p>
              <h2 className="font-display text-[clamp(42px,8vw,112px)] font-medium leading-[.86] tracking-[-.09em]">В РАЗРАБОТКЕ</h2>
              <div className="mx-auto mt-8 w-max border border-black bg-[#dfff4f] px-4 py-2 font-mono text-[9px] tracking-[.14em] shadow-[4px_4px_0_#111]">СОБИРАЮ ЛУЧШУЮ ВЕРСИЮ</div>
            </div>
          </div>
        </section>
      )}

      <footer className="site-footer">
        <div className="footer-contacts" aria-label="Контакты">
          <span>СВЯЗАТЬСЯ</span>
          <a href="https://www.linkedin.com/in/arseniy-kolosov-a831a6170/" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="https://t.me/bubuntu" target="_blank" rel="noreferrer">TELEGRAM</a>
        </div>
      </footer>
    </main>
  )
}
