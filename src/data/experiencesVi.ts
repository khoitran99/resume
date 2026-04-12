import type { ProjectEntry } from "./experiences";

export const projectsVi: ProjectEntry[] = [
  {
    id: "kiera-edtech",
    title: "KIERA - Nền tảng xuất bản số tương tác",
    role: "Lập trình viên Frontend cấp cao",
    period: "Tháng 10/2025 - Tháng 03/2026",
    teamSize: "10",
    summary:
      "KIERA là một content engine có khả năng mở rộng, biến tài liệu giáo dục tĩnh thành các cuốn sách số tương tác, cho phép nhà xuất bản tạo ra hàng trăm đầu sách khác nhau trên cùng một nền tảng.",
    contributions: [
      "Thiết kế kiến trúc component React có thể tái sử dụng, cho phép tạo 100+ cuốn sách số tương tác từ một codebase dùng chung.",
      "Xây dựng các module học tập tương tác (quiz, hotspots, mini-games), cải thiện mức độ tham gia của học sinh khoảng ~30% trong giai đoạn kiểm thử.",
      "Tối ưu pipeline render cho tài nguyên giáo dục nặng về media, giảm thời gian tải trang trung bình từ 5.6s - 10s xuống dưới 1.2s.",
      "Triển khai framework localization hỗ trợ 3+ ngôn ngữ trên nhiều chương trình học khác nhau.",
      "Thiết kế pipeline CI/CD và kiến trúc triển khai cloud, cho phép tự động hóa quy trình xuất bản nội dung ở quy mô lớn.",
    ],
    techStack: [
      "React",
      "Vite",
      "NestJS",
      "TypeScript",
      "TailwindCSS",
      "GCP",
      "GCS",
      "AWS",
    ],
    caseStudy: {
      challenge: [
        "Quy trình xuất bản truyền thống tạo tài nguyên tĩnh riêng cho từng đầu sách, làm chậm tiến độ ra mắt và khiến tính năng tương tác khó bảo trì.",
        "Nền tảng phải hỗ trợ nội dung nặng về media, localization theo từng chương trình học, và trải nghiệm học tập nhất quán mà không tách codebase cho từng cuốn sách.",
        "Quy trình triển khai cần mở rộng cho nhà xuất bản nhưng vẫn giữ authoring, QA và release ổn định.",
      ],
      approach: [
        "Thiết kế hệ thống component React và content model có thể tái sử dụng để các mẫu học tập chung được cấu hình theo từng đầu sách thay vì viết lại từ đầu.",
        "Xây dựng quiz, hotspots và mini-games thành các module lắp ghép với data contract và hành vi render nhất quán.",
        "Tối ưu tải tài nguyên, quá trình render và pipeline triển khai để xử lý media lớn và hỗ trợ xuất bản tự động trên hạ tầng cloud.",
      ],
      impact: [
        "Cho phép tạo ra 100+ biến thể sách tương tác trên cùng một nền tảng dùng chung.",
        "Giảm thời gian tải trung bình của các trang nhiều nội dung từ 5.6-10 giây xuống dưới 1.2 giây.",
        "Cải thiện mức độ tương tác của học sinh trong giai đoạn kiểm thử và giảm ma sát khi phát hành đầu sách mới.",
      ],
    },
  },
  {
    id: "docmed-pom",
    title: "DOCMED - Nền tảng số cho lĩnh vực y tế",
    role: "Lập trình viên Frontend / Full-Stack cấp cao",
    period: "Tháng 11/2024 - Tháng 11/2025",
    teamSize: "20+",
    summary:
      "DOCMED là một hệ sinh thái y tế được thiết kế để hỗ trợ bác sĩ với đơn thuốc số, mua sắm vật tư phòng khám và các dịch vụ kết nối chuyên môn.",
    contributions: [
      "Thiết kế và triển khai kiến trúc tìm kiếm bằng Algolia, cải thiện thời gian phản hồi tìm kiếm từ khoảng ~1.8s xuống dưới 200ms.",
      "Xác định chiến lược indexing và tối ưu truy vấn tìm kiếm để hỗ trợ các bộ lọc phức tạp cho sản phẩm y tế và đơn thuốc.",
      "Quản lý và tối ưu gói Algolia premium (~$10,000/tháng) bằng cách tinh chỉnh chiến lược indexing và mẫu truy vấn để kiểm soát chi phí vận hành.",
      "Triển khai các tối ưu hiệu năng frontend như lazy loading, bundle splitting và asset optimization, giảm thời gian tải trang 55%.",
      "Thiết kế kiến trúc maintenance mode giúp nền tảng có thể vào trạng thái bảo trì một cách mềm dẻo, không cần DevOps chặn IP hay thay đổi ở tầng hạ tầng.",
      "Phối hợp với các nhóm backend và DevOps để đảm bảo tính sẵn sàng cao và các đợt triển khai ổn định trên môi trường production.",
    ],
    techStack: [
      "Next.js",
      "Medusa.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Algolia",
      "Zustand",
      "TanStack Query",
    ],
    caseStudy: {
      challenge: [
        "Sản phẩm cần trải nghiệm tìm kiếm nhanh và chính xác cho danh mục y tế phức tạp, đơn thuốc và các bộ lọc chuyên biệt.",
        "Các đợt bảo trì production phải diễn ra an toàn mà không phụ thuộc vào cách chặn hạ tầng rủi ro.",
        "Khi traffic và danh mục tăng lên, hiệu năng frontend và chi phí Algolia đều trở thành vấn đề vận hành cần kiểm soát.",
      ],
      approach: [
        "Thiết kế lại kiến trúc tìm kiếm dựa trên Algolia index, ranking strategy và query design phù hợp với việc khám phá danh mục y tế.",
        "Áp dụng lazy loading, code splitting và tối ưu tài nguyên để giảm chi phí tải ban đầu của ứng dụng web.",
        "Thiết kế cơ chế maintenance mode ở tầng ứng dụng để business và DevOps có thể phối hợp release an toàn hơn.",
      ],
      impact: [
        "Giảm độ trễ tìm kiếm từ khoảng 1.8 giây xuống dưới 200 mili giây.",
        "Cải thiện thời gian tải trang 55% trên các luồng sử dụng quan trọng.",
        "Tối ưu hiệu quả sử dụng gói Algolia premium trong khi vẫn đảm bảo tính sẵn sàng cho các nghiệp vụ quan trọng.",
      ],
      media: [
        {
          src: "/project/docmed/607052363_4656996827860779_391351012101964168_n.jpg",
          alt: "Tổng quan giao diện nền tảng DOCMED",
        },
      ],
    },
  },
  {
    id: "caskx-exchange",
    title: "Cask Exchange - Sàn đầu tư whisky",
    role: "Lập trình viên Full-Stack cấp cao",
    period: "Tháng 7/2024 - Hiện tại",
    teamSize: "10",
    summary:
      "Cask Exchange là một sàn giao dịch số cho phép nhà đầu tư mua, bán và quản lý đầu tư vào các thùng whisky cao cấp, cung cấp hạ tầng cấp tổ chức cho giao dịch tài sản thay thế.",
    contributions: [
      "Thiết kế kiến trúc full-stack cho sàn đầu tư B2B/B2C, hỗ trợ giao dịch tài sản và theo dõi danh mục.",
      "Xây dựng các dịch vụ backend bằng NestJS và PostgreSQL, xử lý hàng nghìn giao dịch đầu tư và bản ghi tài sản.",
      "Thiết kế hạ tầng cloud có khả năng mở rộng bằng AWS ECS, RDS, CloudFront và ALB, cải thiện độ tin cậy và tính sẵn sàng của hệ thống.",
      "Triển khai các API giúp kết nối trơn tru giữa giao diện giao dịch và các dịch vụ tài chính ở backend.",
      "Giảm thời gian phản hồi API 40% thông qua tối ưu truy vấn và chiến lược caching.",
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "AWS (ECS, RDS, CloudFront, ALB)",
    ],
    caseStudy: {
      challenge: [
        "Nền tảng cần hỗ trợ luồng đầu tư B2B và B2C đáng tin cậy, khả năng theo dõi danh mục và các dịch vụ backend xử lý nhiều giao dịch.",
        "Dữ liệu tài sản và giao dịch tài chính phải ổn định khi hệ thống mở rộng.",
        "Hạ tầng cloud cần đủ bền vững để mang lại trải nghiệm ở mức sản phẩm tài chính chuyên nghiệp.",
      ],
      approach: [
        "Thiết kế kiến trúc full-stack tách bạch journey của marketplace, luồng danh mục và các domain service backend thông qua API rõ ràng.",
        "Xây dựng các service NestJS và PostgreSQL để quản lý lịch sử giao dịch, bản ghi tài sản và vòng đời đầu tư.",
        "Triển khai hạ tầng AWS với ECS, RDS, CloudFront và ALB, đồng thời tối ưu truy vấn và caching để cải thiện tốc độ phản hồi.",
      ],
      impact: [
        "Hỗ trợ hàng nghìn giao dịch đầu tư và bản ghi tài sản trên cùng một nền tảng.",
        "Giảm thời gian phản hồi API 40% nhờ tối ưu truy vấn và caching.",
        "Tạo nền tảng production sẵn sàng cho việc mở rộng marketplace và danh mục đầu tư trong tương lai.",
      ],
    },
  },

  {
    id: "yma-construction",
    title: "YMA - Hệ thống quản lý dự án xây dựng",
    role: "Lập trình viên Full-Stack | Trưởng nhóm Frontend",
    period: "Tháng 12/2021 - Tháng 7/2024",
    teamSize: "12+",
    summary:
      "Hệ thống này quản lý dự án và hoạt động xây dựng cho công ty YMA. Hệ thống giúp kiểm soát doanh thu, chi phí và chấm công nhân viên, đồng thời được đối tác sử dụng để đồng bộ dữ liệu giữa các công ty nhằm đảm bảo mọi bên liên quan đều có thông tin chính xác nhất.",
    contributions: [
      "Dẫn dắt nhóm frontend gồm 4 kỹ sư để triển khai các tính năng quản lý dự án cấp doanh nghiệp.",
      "Thiết kế kiến trúc UI có thể tái sử dụng bằng React và TypeScript, giảm 30% thời gian phát triển cho tính năng mới.",
      "Triển khai pipeline CI/CD giúp tự động hóa việc deploy trên các môi trường staging và production.",
      "Quản lý hạ tầng AWS hỗ trợ nhiều tổ chức đối tác sử dụng nền tảng.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Recharts",
      "Redux",
      "HTML",
      "CSS",
      "Docker",
      "GitLab CI/CD",
      "Golang",
      "Node.js",
      "PostgreSQL",
      "AWS Services",
    ],
    caseStudy: {
      challenge: [
        "Doanh nghiệp cần một hệ thống vận hành thống nhất bao phủ tài chính, chấm công, quy trình xây dựng và đồng bộ dữ liệu với đối tác.",
        "Frontend phải mở rộng được theo tập tính năng cấp doanh nghiệp ngày càng lớn và phục vụ nhiều tổ chức khác nhau.",
        "Nhóm cần quy trình release và hạ tầng ổn định hơn cho các nghiệp vụ quan trọng.",
      ],
      approach: [
        "Dẫn dắt nhóm frontend, xây dựng kiến trúc UI tái sử dụng bằng React và TypeScript, đồng thời chuẩn hóa pattern triển khai giữa các module.",
        "Thiết lập quy trình CI/CD và quản lý hạ tầng AWS phục vụ release ở staging và production.",
        "Phối hợp triển khai dashboard dữ liệu lớn và các module vận hành với backend dành cho đội nội bộ và đối tác.",
      ],
      impact: [
        "Giảm khoảng 30% thời gian phát triển cho các tính năng frontend mới.",
        "Tăng độ tin cậy của quy trình release nhờ pipeline triển khai tự động.",
        "Giúp nền tảng phục vụ nhiều tổ chức đối tác với mức độ hiển thị vận hành nhất quán hơn.",
      ],
    },
  },
  {
    id: "comwork-waste",
    title: "Comwork - Hệ thống điều phối thu gom rác",
    role: "Lập trình viên Full-Stack | Phó nhóm Frontend",
    period: "Tháng 8/2021 - Tháng 5/2022",
    teamSize: "12+",
    summary:
      "Comwork - Hệ thống điều phối thu gom rác là dự án outsource cho khách hàng Nhật Bản để hỗ trợ vận hành doanh nghiệp. Hệ thống giúp call center của công ty kết nối với khách hàng khi họ gọi đặt lịch thu gom rác, đồng thời cho chủ doanh nghiệp cái nhìn tổng quan thông qua các thống kê phân tích và biểu đồ trực quan.",
    contributions: [
      "Phát triển các tính năng lập lịch và quản lý lịch hẹn, hỗ trợ hàng nghìn yêu cầu dịch vụ mỗi tháng.",
      "Xây dựng operational dashboard cung cấp phân tích thời gian thực cho bộ phận call center.",
      "Thiết kế các UI component có thể tái sử dụng, nâng cao năng suất phát triển của cả nhóm.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Recharts",
      "Redux",
      "HTML",
      "CSS",
      "Docker",
      "GitLab CI/CD",
      "Golang",
      "PostgreSQL",
      "AWS Services",
    ],
    caseStudy: {
      challenge: [
        "Hệ thống phải điều phối khối lượng lớn lịch hẹn giữa khách hàng, vận hành hiện trường và đội call center.",
        "Quản lý cần dashboard rõ ràng để nắm nhu cầu dịch vụ và các điểm nghẽn vận hành nhanh chóng.",
        "Vì đây là dự án cho khách hàng ngoài, frontend cần các pattern tái sử dụng để đẩy nhanh tốc độ delivery.",
      ],
      approach: [
        "Xây dựng các tính năng lập lịch và quản lý lịch hẹn bám sát quy trình làm việc hàng ngày của call center.",
        "Phát triển dashboard và các báo cáo trực quan dựa trên biểu đồ cho khối lượng dịch vụ và trạng thái vận hành.",
        "Đầu tư vào các UI component tái sử dụng để các tính năng mới được triển khai nhanh và nhất quán hơn.",
      ],
      impact: [
        "Hỗ trợ hàng nghìn yêu cầu dịch vụ mỗi tháng với quy trình điều phối có cấu trúc hơn.",
        "Cải thiện khả năng quan sát hoạt động của call center và nhu cầu đặt lịch.",
        "Tăng năng suất của đội phát triển nhờ giảm việc lặp lại khi xây UI.",
      ],
    },
  },
  {
    id: "vbms-building",
    title: "VBMS - Hệ thống quản lý tòa nhà VTI",
    role: "Lập trình viên Full-Stack | Phó nhóm Frontend",
    period: "Tháng 11/2020 - Tháng 7/2021",
    teamSize: "10+",
    summary:
      "Đây là dự án nội bộ để điều khiển các thiết bị điện trong tòa nhà như máy lạnh, bóng đèn và cửa. Hệ thống giúp bộ phận quản lý tòa nhà kiểm soát toàn bộ cơ sở vật chất trong tòa nhà.",
    contributions: [
      "Phát triển các dashboard giám sát, trực quan hóa dữ liệu tiêu thụ năng lượng trên nhiều cơ sở.",
      "Xây dựng hình ảnh hóa dữ liệu thời gian thực cho phân tích mức tiêu thụ điện và nước.",
      "Cải thiện tính dễ sử dụng của hệ thống bằng giao diện responsive và các biểu đồ tương tác.",
    ],
    techStack: [
      "React.js",
      "Recharts",
      "Redux",
      "Redux Thunk",
      "HTML",
      "CSS",
      "Docker",
      "GitLab CI/CD",
      "Golang",
      "PostgreSQL",
    ],
    caseStudy: {
      challenge: [
        "Bộ phận quản lý tòa nhà cần theo dõi và điều khiển tập trung các thiết bị kết nối cùng với dữ liệu tiêu thụ tiện ích.",
        "Dữ liệu vận hành phải được hiển thị gần thời gian thực để hữu ích cho việc giám sát và phản ứng.",
        "Giao diện phải đủ dễ dùng cho nhân sự vận hành hàng ngày, đặc biệt trên các dashboard và biểu đồ.",
      ],
      approach: [
        "Xây dựng dashboard giám sát phục vụ quản lý cơ sở vật chất với layout responsive và các biểu đồ giàu dữ liệu.",
        "Triển khai các màn hình phân tích điện và nước bằng thành phần biểu đồ tương tác.",
        "Cải thiện khả năng sử dụng thông qua việc chuẩn hóa tương tác và hành vi responsive cho các tác vụ giám sát chính.",
      ],
      impact: [
        "Giúp đội quản lý có cái nhìn rõ ràng hơn về mức tiêu thụ điện và nước trong tòa nhà.",
        "Cải thiện trải nghiệm sử dụng cho các tác vụ giám sát thiết bị và vận hành hàng ngày.",
        "Tăng giá trị của nền tảng như một bề mặt điều khiển tập trung cho đội nội bộ.",
      ],
    },
  },
  {
    id: "vfs-finance",
    title: "VFS - Hệ thống tài chính VTI",
    role: "Lập trình viên Full-Stack | Phó nhóm Frontend",
    period: "Tháng 1/2020 - Tháng 10/2020",
    teamSize: "10+",
    summary:
      "VFS - Hệ thống tài chính VTI là dự án nội bộ giúp phòng tài chính của VTI nhập dữ liệu tài chính vào hệ thống. Sau đó, ứng dụng tạo ra các báo cáo khác nhau để gửi tới cấp quản lý cao trong công ty hoặc công khai. Dữ liệu này cũng được dùng để tạo biểu đồ, giúp tiết kiệm thời gian trình bày thông tin cho ban điều hành.",
    contributions: [
      "Phát triển các dashboard tài chính, trực quan hóa tập dữ liệu lớn phục vụ báo cáo cho cấp điều hành.",
      "Xây dựng các module báo cáo giúp giảm khoảng ~40% thời gian chuẩn bị báo cáo thủ công.",
    ],
    techStack: [
      "React.js",
      "Recharts",
      "HTML",
      "CSS",
      "Golang",
      "MongoDB",
      "Docker",
    ],
    caseStudy: {
      challenge: [
        "Đội tài chính cần cách nhanh hơn để nhập dữ liệu, tạo báo cáo và truyền đạt kết quả cho lãnh đạo.",
        "Khối lượng dữ liệu lớn phải được chuyển thành dashboard dễ hiểu mà không làm chậm chu kỳ báo cáo.",
        "Công việc chuẩn bị báo cáo thủ công đang tiêu tốn thời gian đáng ra nên dành cho phân tích.",
      ],
      approach: [
        "Xây dựng dashboard tài chính và module báo cáo phục vụ trực tiếp nhu cầu của cấp điều hành và vận hành.",
        "Tổ chức luồng trực quan hóa để dữ liệu tài chính sau khi import có thể được khám phá và trình bày nhanh hơn.",
        "Tập trung vào các pattern UI thực dụng giúp đội nội bộ xử lý các tác vụ lặp lại dễ dàng hơn.",
      ],
      impact: [
        "Giảm khoảng 40% thời gian chuẩn bị báo cáo thủ công.",
        "Cải thiện khả năng quan sát tập dữ liệu tài chính lớn cho quản lý.",
        "Rút ngắn thời gian từ dữ liệu nhập vào đến báo cáo sẵn sàng để trình bày.",
      ],
    },
  },
];
