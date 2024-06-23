import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";
import { Textarea } from "@/shadcn/ui/textarea";

export function ContactUs() {
  return (
    <section
      id="ContactUs"
      className="md:h-screen w-full flex flex-col md:flex-row md:items-center gap-12 justify-center p-6 pt-28 md:mt-0 md:p-12 relative"
    >
      <div>
        <div className="md:w-[33vw] flex flex-col gap-5">
          <p className="text-xl md:text-3xl">
            كن شريكًا معنا
            <br />
            للحصول على تقنية المعلومات الشاملة
          </p>

          <p>
            يسعدنا الرد على أية أسئلة قد تكون لديك ومساعدتك في تحديد أي من
            خدماتنا تناسب احتياجاتك بشكل أفضل.
          </p>

          <a
            className="font-bold underline"
            href="https://wa.me/message/5C7XEKAATNDGN1"
          >
            اتصل بنا على: 966502912596+
          </a>

          <div className="contact-info-benefits">
            <p className="font-bold">المنافع التي ستحصل عليها:</p>
            <div className="grid grid-cols-2 mt-1">
              <p>
                <b>✓</b> نسعى لرضى العميل
              </p>

              <p>
                <b>✓</b> نتحلى بالشفافية
              </p>

              <p>
                <b>✓</b> نسعى للنتائج
              </p>

              <p>
                <b>✓</b> نحل المشاكل
              </p>

              <p>
                <b>✓</b> مستقلين
              </p>

              <p>
                <b>✓</b> أكفاء
              </p>
            </div>
          </div>
          {/* <div>
            <p className="font-bold mb-1">ماذا يحدث بعد حجز استشارتك؟</p>
            <li>نجدول مكالمة حسب الوقت المناسب لك</li>

            <li>نقوم بالاجتماع الاستشاري وعمل جولة استكشافية</li>

            <li>نجهز اقتراحا يناسب احتياجك</li>
          </div> */}
        </div>
      </div>

      <div className="md:w-[33vw] relative shadow-xl bg-background-op backdrop-blur-3xl border border-gray-800  px-4 md:px-8 py-8 overflow-hidden rounded-2xl ">
        <img
          src="https://res.cloudinary.com/dbgwe94vv/image/upload/v1718825539/topography_j800ig.svg"
          alt="circuit-board-pattern"
          className="absolute top-0 left-0 z-0 invert size-[175%] object-cover opacity-[2%]"
        />
        <div className="w-full flex justify-center mb-5"></div>
        <p className="font-bold text-xl md:text-2xl text-white mb-4">
          احجز استشارة مجانية الان:
        </p>

        <form
          className="relative flex flex-col gap-2 z-10"
          action="mail.php"
          method="post"
        >
          <div>
            <p>الاسم الأول:</p>
            <Input name="first-name" type="text" />
          </div>
          <div>
            <p>اسم العائلة:</p>
            <Input name="last-name" type="text" />
          </div>

          <div>
            <p>الشركة / المؤسسة:</p>
            <Input name="company" type="text" />
          </div>
          <div>
            <p>البريد الإلكتروني:</p>
            <Input name="email" type="text" />
          </div>
          <div>
            <p>رقم الهاتف:</p>
            <Input name="phone" type="text" />
          </div>
          <div>
            <p>كيف يمكننا مساعدتك؟:</p>
            <Select dir="rtl" name="service">
              <SelectTrigger>
                <SelectValue placeholder="الرجاء الأختيار..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="استشارات تقنية المعلومات">
                    استشارات تقنية المعلومات
                  </SelectItem>
                  <SelectItem value="تطوير المواقع الإلكترونية">
                    تطوير المواقع الإلكترونية
                  </SelectItem>
                  <SelectItem value="تطوير البرمجيات المخصصة">
                    تطوير البرمجيات المخصصة
                  </SelectItem>
                  <SelectItem value="الذكاء الاصطناعي والاتمتة">
                    الذكاء الاصطناعي والاتمتة
                  </SelectItem>
                  <SelectItem value="حلول التخزين">حلول التخزين</SelectItem>
                  <SelectItem value="صيانة تقنية المعلومات">
                    صيانة تقنية المعلومات
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>الرسالة:</p>
            <Textarea name="message"></Textarea>
          </div>
          <Button className="mt-5" type="submit">
            ارسال
          </Button>
        </form>
      </div>

      {/* <div className="md:w-[25vw]">
        <div>
          <p className="text-2xl mb-5">احجز استشارة مجانية الان:</p>
        </div>

        <form className="flex flex-col gap-2" action="mail.php" method="post">
          <div>
            <p>الاسم الأول:</p>
            <Input name="first-name" type="text" />
          </div>
          <div>
            <p>اسم العائلة:</p>
            <Input name="last-name" type="text" />
          </div>

          <div>
            <p>الشركة / المؤسسة:</p>
            <Input name="company" type="text" />
          </div>
          <div>
            <p>البريد الإلكتروني:</p>
            <Input name="email" type="text" />
          </div>
          <div>
            <p>رقم الهاتف:</p>
            <Input name="phone" type="text" />
          </div>
          <div>
            <p>كيف يمكننا مساعدتك؟:</p>
            <Select dir="rtl" name="service">
              <SelectTrigger>
                <SelectValue placeholder="الرجاء الأختيار..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="استشارات تقنية المعلومات">
                    استشارات تقنية المعلومات
                  </SelectItem>
                  <SelectItem value="تطوير المواقع الإلكترونية">
                    تطوير المواقع الإلكترونية
                  </SelectItem>
                  <SelectItem value="تطوير البرمجيات المخصصة">
                    تطوير البرمجيات المخصصة
                  </SelectItem>
                  <SelectItem value="الذكاء الاصطناعي والاتمتة">
                    الذكاء الاصطناعي والاتمتة
                  </SelectItem>
                  <SelectItem value="حلول التخزين">حلول التخزين</SelectItem>
                  <SelectItem value="صيانة تقنية المعلومات">
                    صيانة تقنية المعلومات
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>الرسالة:</p>
            <Textarea
              name="message"
              className="height: 10vh; resize: none;"
            ></Textarea>
          </div>
          <Button type="submit">ارسال</Button>
        </form>
      </div> */}
    </section>
  );
}
