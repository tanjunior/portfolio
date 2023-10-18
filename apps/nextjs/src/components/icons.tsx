import {
  AlarmClock,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Briefcase,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronUp,
  Circle,
  Copy,
  CreditCard,
  Crop,
  DollarSign,
  Download,
  Edit,
  Eye,
  EyeOff,
  FileTerminal,
  Filter,
  // React,
  GraduationCap,
  Image,
  Loader2,
  LogOut,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Package,
  Plus,
  PlusCircle,
  RefreshCw,
  Search,
  Send,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Star,
  Sun,
  Trash,
  Twitter,
  UploadCloud,
  User,
  Volume2,
  VolumeX,
  Wallet,
  X,
} from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export type Icon = LucideIcon;

export const Icons = {
  // react: React,
  graduationCap: GraduationCap,
  briefcase: Briefcase,
  moon: Moon,
  sun: Sun,
  star: Star,
  twitter: Twitter,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronsLeft: ChevronsLeft,
  chevronsRight: ChevronsRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronUpDown: ChevronsUpDown,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  menu: Menu,
  verticalThreeDots: MoreVertical,
  horizontalThreeDots: MoreHorizontal,
  verticalSliders: Sliders,
  horizontalSliders: SlidersHorizontal,
  circle: Circle,
  check: Check,
  add: Plus,
  addCircle: PlusCircle,
  remove: Minus,
  view: Eye,
  hide: EyeOff,
  trash: Trash,
  edit: Edit,
  crop: Crop,
  reset: RefreshCw,
  send: Send,
  copy: Copy,
  download: Download,
  warning: AlertTriangle,
  search: Search,
  filter: Filter,
  alarm: AlarmClock,
  calendar: CalendarDays,
  user: User,
  terminal: FileTerminal,
  settings: Settings,
  logout: LogOut,
  volumne: Volume2,
  volumneMute: VolumeX,
  message: MessageSquare,
  billing: CreditCard,
  wallet: Wallet,
  dollarSign: DollarSign,
  cart: ShoppingCart,
  product: Package,
  store: ShoppingBag,
  chart: BarChart3,
  upload: UploadCloud,
  placeholder: Image,
  logo: (props: IconProps) => (
    <svg role="img" viewBox="0 0 69 30" width="69" height="30" {...props}>
      <path d="M6.174 1.152V2.48H4.11V12H2.59V2.48H.526V1.152h5.648ZM8.225 9.36v.48c0 .352.08.613.24.784.17.17.496.256.976.256.49 0 .939-.165 1.344-.496V7.712l-1.52.416c-.416.117-.693.267-.832.448-.139.17-.208.432-.208.784Zm-1.04-6.336c.608-.203 1.381-.304 2.32-.304 1.824 0 2.736.827 2.736 2.48V12h-1.44v-.656c-.47.47-1.088.704-1.856.704-1.472 0-2.208-.741-2.208-2.224v-.528c0-.597.155-1.077.464-1.44.31-.373.805-.656 1.488-.848l2.096-.576V5.2c0-.395-.107-.677-.32-.848-.213-.181-.667-.272-1.36-.272-.683 0-1.323.107-1.92.32V3.024Zm8.395.192c.683-.299 1.318-.448 1.904-.448.598 0 1.083.181 1.456.544.384.352.576.864.576 1.536V12H17.98V5.104c0-.63-.314-.944-.944-.944-.458 0-.922.117-1.392.352V12H14.14V2.8h1.44v.416Zm8.89-2.064h1.52v7.632c0 1.376-.182 2.688-.545 3.936l-.496 1.664h-1.568l.48-1.68c.406-1.397.608-2.699.608-3.904V1.152Zm5.13-.032c0 .587-.293.88-.88.88-.586 0-.88-.293-.88-.88 0-.597.294-.896.88-.896.587 0 .88.299.88.896ZM27.97 2.912h1.504V12h-1.504V2.912Zm4.924.304c.683-.299 1.317-.448 1.904-.448.597 0 1.083.181 1.456.544.384.352.576.864.576 1.536V12h-1.536V5.104c0-.63-.315-.944-.944-.944-.459 0-.923.117-1.392.352V12h-1.504V2.8h1.44v.416Zm11.777.176h-.544c-.245 0-.453.048-.624.144.299.373.448.87.448 1.488v1.312c0 .747-.23 1.328-.688 1.744-.448.416-1.13.63-2.048.64-.501 0-.752.235-.752.704 0 .224.064.384.192.48.139.096.379.144.72.144h.928c1.515 0 2.272.635 2.272 1.904v.272c0 1.44-1.018 2.16-3.056 2.16h-.624c-1.163 0-2.042-.187-2.64-.56v-1.408c.704.459 1.574.688 2.608.688h.512c.64 0 1.093-.075 1.36-.224.267-.15.4-.373.4-.672v-.144c0-.256-.07-.443-.208-.56-.128-.128-.384-.192-.768-.192h-.976c-1.376 0-2.064-.464-2.064-1.392v-.256c0-.597.283-.96.848-1.088-1.077-.31-1.616-1.056-1.616-2.24V5.024c0-.757.23-1.344.688-1.76.47-.416 1.12-.624 1.952-.624.832 0 1.472.128 1.92.384.224-.683.73-1.024 1.52-1.024h.24v1.392ZM42.446 6.32V5.04c0-.395-.101-.683-.304-.864-.203-.192-.533-.288-.992-.288-.459 0-.79.096-.992.288-.203.181-.304.47-.304.864v1.28c0 .395.102.688.304.88.203.181.533.272.992.272.459 0 .79-.09.992-.272.203-.192.304-.485.304-.88Zm7.995 1.456V12h-1.504V1.152h2.912c.854 0 1.504.213 1.952.64.459.427.688 1.019.688 1.776v1.728c0 1.184-.453 1.947-1.36 2.288L54.857 12h-1.664l-1.552-4.224h-1.2Zm0-5.312v4.048h1.28c.448 0 .768-.101.96-.304.203-.203.304-.512.304-.928V3.664c0-.8-.421-1.2-1.264-1.2h-1.28ZM56.2 9.568V5.152c0-.768.224-1.376.672-1.824.448-.459 1.13-.688 2.048-.688.918 0 1.595.23 2.032.688.438.448.656 1.056.656 1.824V8.08h-3.936v1.408c0 .427.128.741.384.944.267.203.726.304 1.376.304a6.44 6.44 0 0 0 1.92-.288v1.376a7.92 7.92 0 0 1-2.048.256c-2.07 0-3.104-.837-3.104-2.512Zm1.472-2.704h2.512V5.168c0-.832-.421-1.248-1.264-1.248-.832 0-1.248.416-1.248 1.248v1.696Zm7.081-3.648c.683-.299 1.318-.448 1.904-.448.598 0 1.083.181 1.456.544.384.352.576.864.576 1.536V12h-1.536V5.104c0-.63-.314-.944-.944-.944-.458 0-.922.117-1.392.352V12h-1.504V2.8h1.44v.416Z" />
      <path d="M1.641 29.5v-.378h.924v-7.994H1.53v-.378h1.344c0 .243.005.485.014.728.019.243.028.485.028.728.177-.439.476-.807.896-1.106.43-.299.929-.448 1.498-.448.373 0 .728.075 1.064.224.336.14.63.331.882.574.243.252.434.546.574.882.14.327.21.677.21 1.05 0 .383-.07.742-.21 1.078-.14.327-.331.611-.574.854a3.036 3.036 0 0 1-.882.588c-.336.14-.69.21-1.064.21-.29 0-.56-.037-.812-.112a2.759 2.759 0 0 1-.686-.336 2.315 2.315 0 0 1-.532-.462 2.372 2.372 0 0 1-.336-.574c.01.112.014.22.014.322.01.103.014.21.014.322v3.85h1.232v.378H1.641Zm3.668-8.456c-.336 0-.649.06-.938.182-.28.121-.527.285-.742.49a2.334 2.334 0 0 0-.504.756c-.112.28-.168.583-.168.91 0 .327.06.635.182.924.121.28.294.527.518.742.215.215.462.383.742.504.28.121.583.182.91.182.317 0 .616-.06.896-.182.29-.121.541-.285.756-.49.215-.215.383-.462.504-.742a2.4 2.4 0 0 0 .182-.938c0-.327-.065-.635-.196-.924a2.456 2.456 0 0 0-.49-.756 2.262 2.262 0 0 0-.756-.476 2.23 2.23 0 0 0-.896-.182ZM11.597 26H9.021v-.378h1.022v-9.744H9.035V15.5h1.4v10.122h1.162V26Zm7.489 0h-1.4v-1.036c.01-.121.014-.247.014-.378-.084.205-.2.401-.35.588-.15.177-.327.331-.532.462a2.46 2.46 0 0 1-.7.35 2.844 2.844 0 0 1-.812.112c-.383 0-.742-.07-1.078-.21a2.776 2.776 0 0 1-.854-.602 2.588 2.588 0 0 1-.588-.854 2.672 2.672 0 0 1-.21-1.064c0-.373.07-.728.21-1.064.14-.336.336-.625.588-.868.243-.243.527-.434.854-.574.336-.15.695-.224 1.078-.224.57 0 1.064.15 1.484.448.42.29.719.649.896 1.078l.028-.7.028-.714h.308v4.872h1.036V26Zm-3.78-4.984c-.327 0-.635.065-.924.196-.28.121-.527.29-.742.504a2.458 2.458 0 0 0-.49.756 2.23 2.23 0 0 0-.182.896c0 .336.06.649.182.938.13.29.308.537.532.742.205.205.448.369.728.49.28.112.579.168.896.168.327 0 .63-.06.91-.182.29-.121.541-.285.756-.49a2.298 2.298 0 0 0 .686-1.666c0-.327-.06-.63-.182-.91a2.333 2.333 0 0 0-2.17-1.442Zm8.136 8.484h-2.576v-.378h1.162c.252-.513.504-1.031.756-1.554.262-.513.523-1.022.784-1.526-.42-.821-.835-1.638-1.246-2.45l-1.218-2.464h-1.036v-.378h2.422v.378h-.938c.373.756.747 1.507 1.12 2.254.383.747.752 1.498 1.106 2.254.355-.728.719-1.47 1.092-2.226a531.8 531.8 0 0 1 1.148-2.282h-.798v-.378h2.198v.378h-.966a798.373 798.373 0 0 0-1.988 4.004c-.653 1.316-1.316 2.646-1.988 3.99h.966v.378Zm5.694-.812.266-.294c.215.224.486.397.812.518.327.121.668.182 1.022.182.308 0 .598-.065.868-.196.28-.121.518-.303.714-.546.206-.233.364-.518.476-.854.122-.336.182-.71.182-1.12V24.992l.028-.392a2.787 2.787 0 0 1-.364.588 2.45 2.45 0 0 1-.518.462c-.205.14-.434.247-.686.322a2.845 2.845 0 0 1-.812.112c-.382 0-.742-.07-1.078-.21a2.588 2.588 0 0 1-.854-.588 2.588 2.588 0 0 1-.588-.854 2.672 2.672 0 0 1-.21-1.064c0-.373.07-.728.21-1.064.14-.336.336-.625.588-.868.243-.243.528-.434.854-.574.336-.15.696-.224 1.078-.224.56 0 1.05.145 1.47.434.42.29.724.653.91 1.092a17.575 17.575 0 0 1 .056-1.414h1.358v.378h-1.05v5.25c0 .485-.07.92-.21 1.302-.13.383-.312.705-.546.966a2.59 2.59 0 0 1-.854.616c-.317.15-.653.229-1.008.238-.457 0-.863-.07-1.218-.21a2.207 2.207 0 0 1-.896-.602Zm1.988-7.672c-.336 0-.648.065-.938.196-.28.121-.522.29-.728.504a2.333 2.333 0 0 0-.504.756 2.39 2.39 0 0 0-.168.896c0 .336.061.644.182.924.122.28.294.527.518.742.206.205.448.369.728.49.28.121.584.182.91.182a2.365 2.365 0 0 0 1.68-.686c.215-.215.378-.462.49-.742.122-.28.182-.583.182-.91 0-.327-.06-.635-.182-.924a2.23 2.23 0 0 0-.518-.756 2.504 2.504 0 0 0-.742-.49 2.264 2.264 0 0 0-.91-.182ZM38.476 26H35.9v-.378h1.092v-4.494H35.97v-.378h1.33l.028.742v.308c.01.065.014.173.014.322a2.61 2.61 0 0 1 .406-.616c.159-.187.346-.34.56-.462.196-.13.401-.229.616-.294.224-.065.453-.098.686-.098l-.014.378a2.49 2.49 0 0 0-.84.168 2.38 2.38 0 0 0-.686.392 2.144 2.144 0 0 0-.504.644 1.758 1.758 0 0 0-.182.798v2.59h1.092V26Zm6.818-.714a2.739 2.739 0 0 1-1.96.812c-.383 0-.742-.07-1.078-.21a2.775 2.775 0 0 1-.854-.602 2.588 2.588 0 0 1-.588-.854 2.672 2.672 0 0 1-.21-1.064 2.739 2.739 0 0 1 .798-1.946c.242-.243.527-.434.854-.574.336-.15.695-.224 1.078-.224.373 0 .728.075 1.064.224.345.14.644.331.896.574.242.252.434.546.574.882.149.336.224.69.224 1.064 0 .383-.075.737-.224 1.064-.14.327-.332.611-.574.854Zm-3.612-.266c.205.215.448.383.728.504a2.3 2.3 0 0 0 .924.182c.317 0 .616-.06.896-.182.289-.121.54-.29.756-.504.214-.205.382-.448.504-.728.12-.29.182-.597.182-.924 0-.317-.061-.616-.182-.896a2.333 2.333 0 0 0-.504-.756 2.23 2.23 0 0 0-.756-.518 2.23 2.23 0 0 0-.896-.182 2.3 2.3 0 0 0-.924.182 2.12 2.12 0 0 0-.728.518 2.333 2.333 0 0 0-.504.756 2.23 2.23 0 0 0-.182.896c0 .327.06.635.182.924.12.28.289.523.504.728Zm10.428-.392c-.187.448-.49.807-.91 1.078-.41.261-.877.392-1.4.392-.504 0-.905-.145-1.204-.434-.29-.29-.443-.667-.462-1.134v-3.402H47.07v-.378h1.456v3.752c.019.317.135.597.35.84.224.233.532.36.924.378a2.426 2.426 0 0 0 1.582-.574c.205-.168.369-.373.49-.616a1.74 1.74 0 0 0 .196-.812v-2.59H50.99v-.378h1.47v4.9h1.036V26h-1.344l-.028-.742-.014-.63ZM57.056 26H54.48v-.378h1.092v-4.494H54.55v-.378h1.33l.014.616c.01.14.014.266.014.378.01.103.014.229.014.378.187-.448.486-.803.896-1.064.42-.27.892-.406 1.414-.406.504 0 .9.145 1.19.434.299.29.458.667.476 1.134v3.402h1.078V26H58.4v-.378h1.106v-3.374a1.266 1.266 0 0 0-.364-.826c-.214-.243-.518-.373-.91-.392-.308 0-.597.051-.868.154-.27.103-.508.238-.714.406a1.889 1.889 0 0 0-.504.644 1.76 1.76 0 0 0-.182.798v2.59h1.092V26Zm11.413 0h-1.4v-1.036c.01-.121.014-.247.014-.378a2.39 2.39 0 0 1-.35.588c-.15.177-.327.331-.532.462-.206.15-.439.266-.7.35a2.845 2.845 0 0 1-.812.112c-.383 0-.742-.07-1.078-.21a2.773 2.773 0 0 1-.854-.602 2.588 2.588 0 0 1-.588-.854 2.672 2.672 0 0 1-.21-1.064c0-.373.07-.728.21-1.064.14-.336.336-.625.588-.868.242-.243.527-.434.854-.574.336-.15.695-.224 1.078-.224.28 0 .546.042.798.126.261.075.494.182.7.322.205.14.378.299.518.476.15.177.266.369.35.574 0-.308-.005-.546-.014-.714v-5.544h-.994V15.5h1.386v10.122h1.036V26Zm-3.78-4.984c-.327 0-.635.06-.924.182-.28.121-.523.29-.728.504a2.55 2.55 0 0 0-.504.756c-.122.28-.182.583-.182.91 0 .336.06.649.182.938.13.28.303.523.518.728.205.215.448.383.728.504.28.112.583.168.91.168.326 0 .63-.056.91-.168.29-.121.541-.29.756-.504.214-.205.382-.448.504-.728.121-.29.182-.602.182-.938 0-.327-.06-.635-.182-.924a2.232 2.232 0 0 0-.518-.756 2.504 2.504 0 0 0-.742-.49 2.265 2.265 0 0 0-.91-.182Z" />
    </svg>
  ),
  nextjs: (props: LucideProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  facebook: ({ ...props }: LucideProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg role="img" viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg role="img" viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  whatsapp: (props: IconProps) => {
    return (
      <svg role="img" viewBox="0 0 175.216 175.552" {...props}>
        <defs>
          <linearGradient
            id="b"
            x1="85.915"
            x2="86.535"
            y1="32.567"
            y2="137.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
          <filter
            id="a"
            width="1.115"
            height="1.114"
            x="-.057"
            y="-.057"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="3.531" />
          </filter>
        </defs>
        <path
          fill="#b3b3b3"
          d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032a73.537 73.537 0 0 1-35.159-8.954zm0 0"
          filter="url(#a)"
        />
        <path
          fill="#fff"
          d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032a73.537 73.537 0 0 1-35.159-8.954z"
        />
        <path
          fill="url(#linearGradient1780)"
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        />
        <path
          fill="url(#b)"
          d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        />
      </svg>
    );
  },
  linkedin: (props: IconProps) => {
    return (
      <svg role="img" viewBox="0 0 72 72" {...props}>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#007EBB"
            d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8Z"
          />
          <path
            fill="#FFF"
            d="M62 62H51.316V43.802c0-4.99-1.896-7.777-5.845-7.777-4.296 0-6.54 2.901-6.54 7.777V62H28.632V27.333H38.93v4.67s3.096-5.729 10.453-5.729c7.353 0 12.617 4.49 12.617 13.777V62ZM16.35 22.794c-3.508 0-6.35-2.864-6.35-6.397C10 12.864 12.842 10 16.35 10c3.507 0 6.347 2.864 6.347 6.397 0 3.533-2.84 6.397-6.348 6.397ZM11.032 62h10.736V27.333H11.033V62Z"
          />
        </g>
      </svg>
    );
  },
  telegram: (props: IconProps) => {
    return (
      <svg role="img" viewBox="0 0 240 240" {...props}>
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="120"
            y1="240"
            x2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1d93d2" />
            <stop offset="1" stopColor="#38b0e3" />
          </linearGradient>
        </defs>
        <title>Telegram_logo</title>
        <circle cx="120" cy="120" r="120" fill="url(#linear-gradient)" />
        <path
          d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
          fill="#c8daea"
        />
        <path
          d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763"
          fill="#a9c6d8"
        />
        <path
          d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
          fill="#fff"
        />
      </svg>
    );
  },
};