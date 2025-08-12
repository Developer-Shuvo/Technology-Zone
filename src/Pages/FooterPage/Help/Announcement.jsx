import React from "react";
import { Bell } from "lucide-react";

const Announcement = () => {
  return (
    <div className="flex justify-center px-4 py-8 mt-10 mb-30">
      <div className="w-full max-w-[1300px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Bell className="text-yellow-500" size={28} />
          <h2 className="text-2xl font-bold">Announcement</h2>
        </div>

        {/* Announcement 1 */}
        <div className="bg-white rounded-xl shadow p-5 border border-gray-200 mb-6">
          <div className="bg-teal-700 text-white px-4 py-2 rounded mb-4 inline-block text-lg font-semibold">
            Get Ready for the iPhone 16 Series
          </div>
          <p className="text-sm text-gray-500 mb-3">
            2024-09-18T12:19:38.864460+06:00
          </p>
          <p className="whitespace-pre-line leading-relaxed text-gray-800">
            অ্যাপলের লেটেস্ট অ্যাডভেঞ্চার গ্রেটেস্ট iPhone 16 Series এখন টেক
            কমিউনিটিতে হাইপ এর শীর্ষে। সুমাস টেক এ খুব শীঘ্রই প্রাইসে পেয়ে
            যাবেন আপনাদের বহুল আকাঙ্খিত এই ডিভাইসগুলো। তাই দেরি না করে সবার আগে
            iPhone 16 Series হাতে পেতে অর্ডার করুন সুমাস টেক ওয়েবসাইট বা
            ইন্টেলিজেন্ট অ্যাপ থেকে।
          </p>
        </div>

        {/* Announcement 2 */}
        <div className="bg-white rounded-xl shadow p-5 border border-gray-200">
          <div className="bg-teal-700 text-white px-4 py-2 rounded mb-4 inline-block text-lg font-semibold">
            Apple International
          </div>
          <p className="text-sm text-gray-500 mb-3">
            2023-11-24T14:09:41.822463+06:00
          </p>
          <p className="whitespace-pre-line leading-relaxed text-gray-800">
            অ্যাপল গ্লোবাল কেনার পরে আপনার চিন্তা ননস্টপ? সুমাসটেক Apple
            International ওয়ারেন্টি দিবে সেই চিনায় ফুলস্টপ! কোনো প্রকার চার্জ
            ছাড়াই!! ❤️{"\n"}
            Buy any apple global version product & get 1 year apple limited
            international warranty by us without any additional charge from
            today.
            {"\n\n"}
            Note: Those who have bought the Global iPhone 15 series device from
            us till yesterday; Please don’t feel disappointed as you guys will
            also come under this service automatically. To register for this
            service, simply call our hotline and visit any of our outlets and
            enjoy the "1 year Apple International Warranty". (T&C applied)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
