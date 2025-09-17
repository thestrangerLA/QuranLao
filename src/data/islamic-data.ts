
import { Bot, BookOpen, HandHeart, HeartHandshake, HelpCircle, History, ListChecks, LucideIcon, ScrollText, Sparkles, TrendingUp, Users, Utensils, Hourglass, BookHeart, Shield, HandCoins, Library, BookUser, Wheat, Crown, MessageSquare, Calendar, Users2, ShieldQuestion, Gift } from 'lucide-react';
import React from 'react';

interface HomeCard {
    id: "islam-what-is-it" | "belief-in-allah" | "prophet-who-is-he" | "faith" | "practice" | "articles" | "prophet-history" | "names-of-allah";
    title: string;
    emoji: string;
}

export const homeCardData: HomeCard[] = [
    { id: "islam-what-is-it", title: "ອິສລາມແມ່ນຫຍັງ?", emoji: "🕌" },
    { id: "belief-in-allah", title: "ອັລລໍຮ໌ແມ່ນໃຜ?", emoji: "✨" },
    { id: "faith", title: "ຫຼັກຄວາມເຊື່ອ", emoji: "📖" },
    { id: "practice", title: "ຫຼັກປະຕິບັດ", emoji: "🤲" },
    { id: "prophet-who-is-he", title: "ສາດສະດາແມ່ນໃຜ?", emoji: "🗣️" },
    { id: "prophet-history", title: "ປະຫວັດສາດສະດາ", emoji: "📜" },
    { id: "articles", title: "ບົດຄວາມ", emoji: "📝" },
    { id: "names-of-allah", title: "ຊື່ຂອງອັລລໍຮ໌", emoji: "👑" },
];


interface FundamentalCard {
    id: "islam-what-is-it" | "belief-in-allah" | "prophet-who-is-he";
    title: string;
    subtitle: string;
    icon: React.ReactElement;
    emoji: string;
}

export const fundamentalsCardData: FundamentalCard[] = [
    { id: "islam-what-is-it", title: "ອິສລາມແມ່ນຫຍັງ?", subtitle: "ຄວາມໝາຍ ແລະ ແກ່ນສານ", icon: React.createElement(HandHeart), emoji: "🕌" },
    { id: "belief-in-allah", title: "ອັລລໍຮ໌ແມ່ນໃຜ?", subtitle: "ຄວາມເຊື່ອໃນພຣະເຈົ້າອົງດຽວ", icon: React.createElement(Sparkles), emoji: "✨" },
    { id: "prophet-who-is-he", title: "ນະບີແມ່ນໃຜ?", subtitle: "ທູດຂອງພຣະເຈົ້າ", icon: React.createElement(TrendingUp), emoji: "🗣️" },
];

interface OtherHomeCard {
    id: "faith" | "practice" | "articles";
    title: string;
    subtitle: string;
    icon: React.ReactElement;
}

export const otherHomeCards: OtherHomeCard[] = [
    { id: "faith", title: "ຫຼັກຄວາມເຊື່ອ", subtitle: "6 ປະການທີ່ຕ້ອງເຊື່ອ", icon: React.createElement(BookHeart) },
    { id: "practice", title: "ຫຼັກປະຕິບັດ", subtitle: "5 ປະການທີ່ຕ້ອງເຮັດ", icon: React.createElement(HandCoins) },
    { id: "articles", title: "ບົດຄວາມ", subtitle: "ອ່ານເພີ່ມເຕີມ", icon: React.createElement(HelpCircle) },
];


export const faithCardData = [
    { number: "1.", title: "ເຊື່ອໃນອັລລໍຮ໌", emoji: "✨", id: "belief-in-allah" },
    { number: "2.", title: "ເຊື່ອໃນທູດສະຫວັນ", emoji: "👼", id: "belief-in-angels" },
    { number: "3.", title: "ເຊື່ອໃນຄໍາພີ", emoji: "📖", id: "belief-in-books" },
    { number: "4.", title: "ເຊື່ອໃນນະບີ", emoji: "👥", id: "belief-in-prophets" },
    { number: "5.", title: "ເຊື່ອໃນວັນກິຍາມະ", emoji: "⚖️", id: "belief-in-last-day" },
    { number: "6.", title: "ເຊື່ອໃນກະດັນ", emoji: "🎯", id: "belief-in-destiny" },
];

export const practiceCardData = [
    { title: "1. ການເປັນພະຍານ", emoji: "☝️", id: "shahada" },
    { title: "2. ການລະໝາດ", emoji: "🤲", id: "salat" },
    { title: "3. ການຈ່າຍຊະກາດ", emoji: "💰", id: "zakat" },
    { title: "4. ການຖືອົດ", emoji: "🌙", id: "sawm" },
    { title: "5. ການສະແຫວງບຸນຮັຈ", emoji: "🕋", id: "hajj" },
];

interface ArticleCard {
    id: "halal-food" | "afterlife" | "god-exists";
    title: string;
    subtitle: string;
    icon: React.ReactElement;
}

export const articlesCardData: ArticleCard[] = [
    { id: "halal-food", title: "ອາຫານຮາລານ (Halal)", subtitle: "ຫຼັກການແລະຄວາມໝາຍ", icon: React.createElement(Utensils) },
    { id: "afterlife", title: "ຊີວິດຫຼັງຄວາມຕາຍໃນອິດສະລາມ", subtitle: "ບາຣ໌ຊັກ, ວັນຕັດສິນ, ສະຫວັນ, ນາລົກ", icon: React.createElement(Hourglass) },
    { id: "god-exists", title: "ພະເຈົ້າມີຈິງບໍ?", subtitle: "ທັດສະນະຂອງອິດສະລາມ", icon: React.createElement(HelpCircle) },
];
