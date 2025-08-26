'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface SurahHudViewProps {
  goBack: () => void;
}

const verses = [
    { number: "11:1", arabic: "Placeholder", lao: "Placeholder", english: "Alif, Lam, Ra. [This is] a Book whose verses are perfected and then presented in detail from [one who is] Wise and Acquainted." },
    { number: "11:2", arabic: "Placeholder", lao: "Placeholder", english: "[Saying], 'Do not worship except Allah. Indeed, I am to you from Him a warner and a bringer of good tidings.'" },
    { number: "11:3", arabic: "Placeholder", lao: "Placeholder", english: "And [saying], 'Seek forgiveness of your Lord and repent to Him, [and] He will let you enjoy a good provision for a specified term and give every doer of favor his favor. But if you turn away, then indeed, I fear for you the punishment of a great Day.'" },
    { number: "11:4", arabic: "Placeholder", lao: "Placeholder", english: "To Allah is your return, and He is over all things competent." },
    { number: "11:5", arabic: "Placeholder", lao: "Placeholder", english: "Unquestionably, they fold up their breasts to hide from Him. Unquestionably, [even] when they cover themselves in their clothing, Allah knows what they conceal and what they declare. Indeed, He is Knowing of that within the breasts." },
    { number: "11:6", arabic: "Placeholder", lao: "Placeholder", english: "And there is no creature on earth but that upon Allah is its provision, and He knows its place of dwelling and place of storage. All is in a clear register." },
    { number: "11:7", arabic: "Placeholder", lao: "Placeholder", english: "And it is He who created the heavens and the earth in six days - and His Throne had been upon water - that He might test you as to which of you is best in deed. But if you say, 'Indeed, you are resurrected after death,' those who disbelieve will surely say, 'This is not but obvious magic.'" },
    { number: "11:8", arabic: "Placeholder", lao: "Placeholder", english: "And if We delay for them the punishment for a limited time, they will surely say, 'What detains it?' Unquestionably, on the Day it comes to them, it will not be averted from them, and they will be enveloped by what they used to ridicule." },
    { number: "11:9", arabic: "Placeholder", lao: "Placeholder", english: "And if We give man a taste of mercy from Us and then We withdraw it from him, indeed, he is despairing and ungrateful." },
    { number: "11:10", arabic: "Placeholder", lao: "Placeholder", english: "But if We give him a taste of favor after hardship has touched him, he will surely say, 'Bad times have gone from me.' Indeed, he is exultant and boastful -" },
    { number: "11:11", arabic: "Placeholder", lao: "Placeholder", english: "Except for those who are patient and do righteous deeds; those will have forgiveness and a great reward." },
    { number: "11:12", arabic: "Placeholder", lao: "Placeholder", english: "Then would you possibly leave [out] some of what is revealed to you, or is your breast constrained by it because they say, 'Why has there not been sent down to him a treasure or come with him an angel?' You are only a warner. And Allah is Disposer of all things." },
    { number: "11:13", arabic: "Placeholder", lao: "Placeholder", english: "Or do they say, 'He invented it'? Say, 'Then bring ten surahs like it that have been invented and call upon whoever you can besides Allah, if you should be truthful.'" },
    { number: "11:14", arabic: "Placeholder", lao: "Placeholder", english: "And if they do not respond to you - then know that the Qur'an was revealed with the knowledge of Allah and that there is no deity except Him. Then, will you be Muslims?" },
    { number: "11:15", arabic: "Placeholder", lao: "Placeholder", english: "Whoever desires the life of this world and its adornments - We will fully compensate them for their deeds therein, and they therein will not be deprived." },
    { number: "11:16", arabic: "Placeholder", lao: "Placeholder", english: "Those are the ones for whom there is not in the Hereafter but the Fire. And lost is what they did therein, and worthless is what they used to do." },
    { number: "11:17", arabic: "Placeholder", lao: "Placeholder", english: "So is one who is on clear evidence from his Lord and a witness from Him follows it, and before it was the Scripture of Moses to lead and as a mercy? Those [truly] believe in it. But whoever disbelieves in it from the [various] factions - the Fire is his promised destination. So be not in doubt about it. Indeed, it is the truth from your Lord, but most of the people do not believe." },
    { number: "11:18", arabic: "Placeholder", lao: "Placeholder", english: "And who is more unjust than he who invents a lie about Allah? Those will be presented before their Lord, and the witnesses will say, 'These are the ones who lied against their Lord.' Unquestionably, the curse of Allah is upon the wrongdoers." },
    { number: "11:19", arabic: "Placeholder", lao: "Placeholder", english: "Who averted [people] from the way of Allah and sought to make it [seem] deviant while they, in the Hereafter, were disbelievers." },
    { number: "11:20", arabic: "Placeholder", lao: "Placeholder", english: "Those were not causing failure [to Allah] on earth, nor did they have besides Allah any protectors. For them the punishment will be multiplied. They were not able to hear, nor did they see." },
    { number: "11:21", arabic: "Placeholder", lao: "Placeholder", english: "Those are the ones who will have lost themselves, and lost from them is what they used to invent." },
    { number: "11:22", arabic: "Placeholder", lao: "Placeholder", english: "Assuredly, it is they who in the Hereafter will be the greatest losers." },
    { number: "11:23", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, they who believed and did righteous deeds and humbled themselves to their Lord - those are the companions of Paradise; they will abide eternally therein." },
    { number: "11:24", arabic: "Placeholder", lao: "Placeholder", english: "The example of the two parties is like the blind and deaf, and the seeing and hearing. Are they equal in comparison? Then, will you not remember?" },
    { number: "11:25", arabic: "Placeholder", lao: "Placeholder", english: "And We had certainly sent Noah to his people, [saying], 'Indeed, I am to you a clear warner.'" },
    { number: "11:26", arabic: "Placeholder", lao: "Placeholder", english: "That you not worship except Allah. Indeed, I fear for you the punishment of a painful day." },
    { number: "11:27", arabic: "Placeholder", lao: "Placeholder", english: "So the eminent among those who disbelieved from his people said, 'We do not see you but as a man like ourselves, and we do not see you followed except by those who are the lowest of us, at first glance. And we do not see in you over us any merit; rather, we think you are liars.'" },
    { number: "11:28", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'O my people, have you considered: if I should be upon clear evidence from my Lord while He has given me mercy from Himself but it has been made unapparent to you, should we force it upon you while you are averse to it?" },
    { number: "11:29", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, I ask not of you for it any wealth. My reward is not but from Allah. And I am not one to drive away those who have believed. Indeed, they will meet their Lord, but I see that you are a people behaving ignorantly." },
    { number: "11:30", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, who would protect me from Allah if I drove them away? Then will you not be reminded?" },
    { number: "11:31", arabic: "Placeholder", lao: "Placeholder", english: "And I do not tell you that I have the depositories [containing the provision] of Allah or that I know the unseen, nor do I tell you that I am an angel, nor do I say of those whom your eyes look down upon that Allah will never grant them any good. Allah is most knowing of what is within their souls. Indeed, I would then be among the wrongdoers.'" },
    { number: "11:32", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'O Noah, you have disputed us and been frequent in dispute of us. So bring us what you threaten us with, if you should be of the truthful.'" },
    { number: "11:33", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'Allah will only bring it to you if He wills, and you will not cause [Him] failure." },
    { number: "11:34", arabic: "Placeholder", lao: "Placeholder", english: "And my advice will not benefit you - although I wished to advise you - If Allah should intend to put you in error. He is your Lord, and to Him you will be returned.'" },
    { number: "11:35", arabic: "Placeholder", lao: "Placeholder", english: "Or do they say, 'He has invented it'? Say, 'If I have invented it, then upon me is my crime, and I am innocent of that of which you are guilty.'" },
    { number: "11:36", arabic: "Placeholder", lao: "Placeholder", english: "And it was revealed to Noah that, 'No one will believe from your people except those who have already believed, so do not be distressed by what they have been doing." },
    { number: "11:37", arabic: "Placeholder", lao: "Placeholder", english: "And construct the ark under Our observation and Our inspiration and do not address Me concerning those who have wronged; indeed, they are to be drowned.'" },
    { number: "11:38", arabic: "Placeholder", lao: "Placeholder", english: "And he constructed the ark, and whenever an assembly of the eminent of his people passed by him, they ridiculed him. He said, 'If you ridicule us, then we will ridicule you just as you ridicule.'" },
    { number: "11:39", arabic: "Placeholder", lao: "Placeholder", english: "And you are going to know who will get a punishment that will disgrace him and upon whom will descend an enduring punishment." },
    { number: "11:40", arabic: "Placeholder", lao: "Placeholder", english: "[So it was], until when Our command came and the oven overflowed, We said, 'Load upon the ark of each [creature] two mates and your family, except those about whom the word has preceded, and [include] whoever has believed.' But none had believed with him, except a few." },
    { number: "11:41", arabic: "Placeholder", lao: "Placeholder", english: "And [Noah] said, 'Embark therein; in the name of Allah is its course and its anchorage. Indeed, my Lord is Forgiving and Merciful.'" },
    { number: "11:42", arabic: "Placeholder", lao: "Placeholder", english: "And it sailed with them through waves like mountains, and Noah called to his son who was apart [from them], 'O my son, come aboard with us and be not with the disbelievers.'" },
    { number: "11:43", arabic: "Placeholder", lao: "Placeholder", english: "[But] he said, 'I will take refuge on a mountain to protect me from the water.' [Noah] said, 'There is no protector today from the decree of Allah, except for whom He gives mercy.' And the waves came between them, and he was among the drowned." },
    { number: "11:44", arabic: "Placeholder", lao: "Placeholder", english: "And it was said, 'O earth, swallow your water, and O sky, withhold [your rain].' And the water subsided, and the matter was accomplished, and the ark came to rest on the mountain of Judiyy. And it was said, 'Away with the wrongdoing people.'" },
    { number: "11:45", arabic: "Placeholder", lao: "Placeholder", english: "And Noah called to his Lord and said, 'My Lord, indeed my son is of my family; and indeed, Your promise is true; and You are the most just of judges!'" },
    { number: "11:46", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'O Noah, indeed he is not of your family; indeed, he is [one whose] work was other than righteous, so ask Me not for that about which you have no knowledge. Indeed, I advise you, lest you be among the ignorant.'" },
    { number: "11:47", arabic: "Placeholder", lao: "Placeholder", english: "[Noah] said, 'My Lord, I seek refuge in You from asking that of which I have no knowledge. And unless You forgive me and have mercy upon me, I will be among the losers.'" },
    { number: "11:48", arabic: "Placeholder", lao: "Placeholder", english: "It was said, 'O Noah, disembark in security from Us and blessings upon you and upon nations [descending] from those with you. But other nations [of them] We will grant enjoyment; then there will touch them from Us a painful punishment.'" },
    { number: "11:49", arabic: "Placeholder", lao: "Placeholder", english: "That is from the news of the unseen which We reveal to you, [O Muhammad]. You knew it not, neither you nor your people, before this. So be patient; indeed, the [best] outcome is for the righteous." },
    { number: "11:50", arabic: "Placeholder", lao: "Placeholder", english: "And to 'Aad [We sent] their brother Hud. He said, 'O my people, worship Allah ; you have no deity other than Him. You are not but inventors [of falsehood]." },
    { number: "11:51", arabic: "Placeholder", lao: "Placeholder", english: "O my people, I do not ask you for it any reward. My reward is only from the one who created me. Then will you not reason?" },
    { number: "11:52", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, ask forgiveness of your Lord and then repent to Him. He will send [rain from] the sky upon you in showers and increase you in strength [added] to your strength. And do not turn away, [being] criminals.'" },
    { number: "11:53", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'O Hud, you have not brought us clear evidence, and we are not ones to leave our gods on your say-so. And we are not believers in you." },
    { number: "11:54", arabic: "Placeholder", lao: "Placeholder", english: "We only say that some of our gods have possessed you with evil.' He said, 'Indeed, I call Allah to witness, and witness [yourselves] that I am free from whatever you associate with Him" },
    { number: "11:55", arabic: "Placeholder", lao: "Placeholder", english: "Other than Him. So plot against me all together; then do not give me respite." },
    { number: "11:56", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, I have relied upon Allah, my Lord and your Lord. There is no creature but that He holds its forelock. Indeed, my Lord is on a path that is straight." },
    { number: "11:57", arabic: "Placeholder", lao: "Placeholder", english: "But if they turn away, I have already conveyed that with which I was sent to you. My Lord will give succession to a people other than you, and you will not harm Him at all. Indeed, my Lord is, over all things, Guardian.'" },
    { number: "11:58", arabic: "Placeholder", lao: "Placeholder", english: "And when Our command came, We saved Hud and those who believed with him by a mercy from Us; and We saved them from a harsh punishment." },
    { number: "11:59", arabic: "Placeholder", lao: "Placeholder", english: "And that was 'Aad, who rejected the signs of their Lord and disobeyed His messengers and followed the command of every obstinate tyrant." },
    { number: "11:60", arabic: "Placeholder", lao: "Placeholder", english: "And they were followed in this world by a curse and on the Day of Resurrection. Unquestionably, 'Aad denied their Lord. Then, away with 'Aad, the people of Hud." },
    { number: "11:61", arabic: "Placeholder", lao: "Placeholder", english: "And to Thamud [We sent] their brother Salih. He said, 'O my people, worship Allah ; you have no deity other than Him. He has produced you from the earth and settled you in it, so ask forgiveness of Him and then repent to Him. Indeed, my Lord is near and responsive.'" },
    { number: "11:62", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'O Salih, you were among us a man of promise before this. Do you forbid us to worship what our fathers worshipped? And indeed we are, about that to which you invite us, in disquieting doubt.'" },
    { number: "11:63", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'O my people, have you considered: if I should be upon clear evidence from my Lord and He has given me mercy from Himself, who would protect me from Allah if I disobeyed Him? You would not increase me then but in loss." },
    { number: "11:64", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, this is the she-camel of Allah - [she is] to you a sign. So let her feed upon Allah 's earth and do not touch her with harm, or you will be taken by an impending punishment.'" },
    { number: "11:65", arabic: "Placeholder", lao: "Placeholder", english: "But they hamstrung her, so he said, 'Enjoy yourselves in your homes for three days. That is a promise not to be denied.'" },
    { number: "11:66", arabic: "Placeholder", lao: "Placeholder", english: "So when Our command came, We saved Salih and those who believed with him by a mercy from Us and from the disgrace of that day. Indeed, it is your Lord who is the Powerful, the Exalted in Might." },
    { number: "11:67", arabic: "Placeholder", lao: "Placeholder", english: "And the shriek seized those who had wronged, and they became within their homes [corpses] fallen prone." },
    { number: "11:68", arabic: "Placeholder", lao: "Placeholder", english: "As if they had never prospered therein. Unquestionably, Thamud denied their Lord. Then, away with Thamud." },
    { number: "11:69", arabic: "Placeholder", lao: "Placeholder", english: "And certainly did Our messengers come to Abraham with good tidings; they said, 'Peace.' He said, 'Peace,' and did not delay in bringing a roasted calf." },
    { number: "11:70", arabic: "Placeholder", lao: "Placeholder", english: "But when he saw their hands not reaching for it, he distrusted them and felt from them apprehension. They said, 'Fear not. We have been sent to the people of Lot.'" },
    { number: "11:71", arabic: "Placeholder", lao: "Placeholder", english: "And his wife was standing, and she smiled. Then We gave her good tidings of Isaac and after Isaac, Jacob." },
    { number: "11:72", arabic: "Placeholder", lao: "Placeholder", english: "She said, 'Woe to me! Shall I give birth while I am an old woman and this, my husband, is an old man? Indeed, this is a strange thing!'" },
    { number: "11:73", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'Are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honorable.'" },
    { number: "11:74", arabic: "Placeholder", lao: "Placeholder", english: "And when the fright had left Abraham and the good tidings had reached him, he began to argue with Us concerning the people of Lot." },
    { number: "11:75", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, Abraham was forbearing, grieving and [frequently] returning [to Allah]." },
    { number: "11:76", arabic: "Placeholder", lao: "Placeholder", english: "'O Abraham, turn away from this. Indeed, the command of your Lord has come, and indeed, there will reach them a punishment irreversible.'" },
    { number: "11:77", arabic: "Placeholder", lao: "Placeholder", english: "And when Our messengers came to Lot, he was distressed for them and felt for them great discomfort and said, 'This is a distressful day.'" },
    { number: "11:78", arabic: "Placeholder", lao: "Placeholder", english: "And his people came rushing to him, and before this they had been doing evil deeds. He said, 'O my people, these are my daughters; they are purer for you. So fear Allah and do not disgrace me concerning my guests. Is there not among you a man of reason?'" },
    { number: "11:79", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'You have already known that we have not concerning your daughters any claim, and indeed, you know what we want.'" },
    { number: "11:80", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'If only I had against you some power or could take refuge in a strong support.'" },
    { number: "11:81", arabic: "Placeholder", lao: "Placeholder", english: "The angels said, 'O Lot, indeed we are messengers of your Lord; [therefore], they will never reach you. So set out with your family during a portion of the night and let not any of you look back - except your wife; indeed, she will be struck by that which strikes them. Indeed, their appointment is [for] the morning. Is not the morning near?'" },
    { number: "11:82", arabic: "Placeholder", lao: "Placeholder", english: "So when Our command came, We made the highest part [of the city] its lowest and rained upon them stones of layered hard clay," },
    { number: "11:83", arabic: "Placeholder", lao: "Placeholder", english: "Marked from your Lord. And Allah's punishment is not from the wrongdoers [very] far." },
    { number: "11:84", arabic: "Placeholder", lao: "Placeholder", english: "And to Madyan [We sent] their brother Shu'ayb. He said, 'O my people, worship Allah ; you have no deity other than Him. And do not decrease from the measure and the scale. Indeed, I see you in good condition, and indeed, I fear for you the punishment of an encompassing Day." },
    { number: "11:85", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, give full measure and weight in justice and do not deprive the people of their due and do not commit abuse on the earth, spreading corruption." },
    { number: "11:86", arabic: "Placeholder", lao: "Placeholder", english: "What remains [lawful] from Allah is best for you, if you would be believers. And I am not a guardian over you.'" },
    { number: "11:87", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'O Shu'ayb, does your prayer command you that we should leave what our fathers worship or that we should not do with our wealth what we please? Indeed, you are the forbearing, the discerning!'" },
    { number: "11:88", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'O my people, have you considered: if I am upon clear evidence from my Lord and He has provided me with a good provision from Him...? And I do not intend to differ from you in that which I have forbidden you. I only intend reform as much as I am able. And my success is not but through Allah. Upon him I have relied, and to Him I return." },
    { number: "11:89", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, let not [your] dissension from me cause you to be struck by that similar to what struck the people of Noah or the people of Hud or the people of Salih. And the people of Lot are not from you far away." },
    { number: "11:90", arabic: "Placeholder", lao: "Placeholder", english: "And ask forgiveness of your Lord and then repent to Him. Indeed, my Lord is Merciful and Affectionate.'" },
    { number: "11:91", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'O Shu'ayb, we do not understand much of what you say, and indeed, we see you among us as weak. And if not for your family, we would have stoned you; and you are not powerful against us.'" },
    { number: "11:92", arabic: "Placeholder", lao: "Placeholder", english: "He said, 'O my people, is my family more respected for you than Allah? But you have taken Him behind you in disregard. Indeed, my Lord is encompassing of what you do." },
    { number: "11:93", arabic: "Placeholder", lao: "Placeholder", english: "And O my people, work according to your position; indeed, I am working. You are going to know to whom will come a punishment that will disgrace him and who is a liar. So watch; indeed, I am with you a watcher, [awaiting the outcome].'" },
    { number: "11:94", arabic: "Placeholder", lao: "Placeholder", english: "And when Our command came, We saved Shu'ayb and those who believed with him by a mercy from Us. And the shriek seized those who had wronged, and they became within their homes [corpses] fallen prone." },
    { number: "11:95", arabic: "Placeholder", lao: "Placeholder", english: "As if they had never prospered therein. Then, away with Madyan as was Thamud done away with." },
    { number: "11:96", arabic: "Placeholder", lao: "Placeholder", english: "And We did certainly send Moses with Our signs and a clear authority." },
    { number: "11:97", arabic: "Placeholder", lao: "Placeholder", english: "To Pharaoh and his establishment, but they followed the command of Pharaoh, and the command of Pharaoh was not guided." },
    { number: "11:98", arabic: "Placeholder", lao: "Placeholder", english: "He will precede his people on the Day of Resurrection and lead them into the Fire; and wretched is the place to which they are led." },
    { number: "11:99", arabic: "Placeholder", lao: "Placeholder", english: "And they were followed in this [world] by a curse and on the Day of Resurrection. Wretched is the gift which is given." },
    { number: "11:100", arabic: "Placeholder", lao: "Placeholder", english: "That is from the news of the cities, which We relate to you; of them, some are [still] standing and some are [as] a harvest [mowed down]." },
    { number: "11:101", arabic: "Placeholder", lao: "Placeholder", english: "And We did not wrong them, but they wronged themselves. So their gods whom they invoked besides Allah did not avail them of anything when the command of your Lord came. And they did not increase them in other than ruin." },
    { number: "11:102", arabic: "Placeholder", lao: "Placeholder", english: "And such is the seizure of your Lord when He seizes the cities while they are committing wrong. Indeed, His seizure is painful and severe." },
    { number: "11:103", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, in that is a sign for those who fear the punishment of the Hereafter. That is a Day for which the people will be collected, and that is a Day [which will be] witnessed." },
    { number: "11:104", arabic: "Placeholder", lao: "Placeholder", english: "And We do not delay it except for a limited term." },
    { number: "11:105", arabic: "Placeholder", lao: "Placeholder", english: "The Day it comes, no soul will speak except by His permission. And among them will be the miserable and the blessed." },
    { number: "11:106", arabic: "Placeholder", lao: "Placeholder", english: "As for those who were miserable, they will be in the Fire. For them therein is [violent] exhaling and inhaling." },
    { number: "11:107", arabic: "Placeholder", lao: "Placeholder", english: "They will abide therein as long as the heavens and the earth endure, except as your Lord wills. Indeed, your Lord is an effecter of what He intends." },
    { number: "11:108", arabic: "Placeholder", lao: "Placeholder", english: "And as for those who were happy, they will be in Paradise, abiding therein as long as the heavens and the earth endure, except as your Lord wills - a gift uninterrupted." },
    { number: "11:109", arabic: "Placeholder", lao: "Placeholder", english: "So do not be in doubt, [O Muhammad], as to what these [polytheists] worship. They worship not except as their fathers worshipped before. And indeed, We will give them their share undiminished." },
    { number: "11:110", arabic: "Placeholder", lao: "Placeholder", english: "And We had certainly given Moses the Scripture, but it was differed over. And if not for a word that had preceded from your Lord, it would have been judged between them. And indeed, they are, about it, in disquieting doubt." },
    { number: "11:111", arabic: "Placeholder", lao: "Placeholder", english: "And indeed, each [of the believers and disbelievers] - your Lord will fully compensate them for their deeds. Indeed, He is Acquainted with what they do." },
    { number: "11:112", arabic: "Placeholder", lao: "Placeholder", english: "So remain on a right course as you have been commanded, [you] and those who have turned back with you [to Allah], and do not transgress. Indeed, He is Seeing of what you do." },
    { number: "11:113", arabic: "Placeholder", lao: "Placeholder", english: "And do not incline toward those who do wrong, lest you be touched by the Fire, and you would not have other than Allah any protectors; then you would not be helped." },
    { number: "11:114", arabic: "Placeholder", lao: "Placeholder", english: "And establish prayer at the two ends of the day and at the approach of the night. Indeed, good deeds do away with misdeeds. That is a reminder for those who remember." },
    { number: "11:115", arabic: "Placeholder", lao: "Placeholder", english: "And be patient, for indeed, Allah does not allow to be lost the reward of those who do good." },
    { number: "11:116", arabic: "Placeholder", lao: "Placeholder", english: "So why were there not among the generations before you those of enduring discrimination forbidding corruption on earth - except a few of those We saved from among them? But those who wronged pursued enjoyment of that which they were given luxury in, and they were criminals." },
    { number: "11:117", arabic: "Placeholder", lao: "Placeholder", english: "And your Lord would not have destroyed the cities unjustly while their people were reformers." },
    { number: "11:118", arabic: "Placeholder", lao: "Placeholder", english: "And if your Lord had willed, He could have made mankind one community; but they will not cease to differ." },
    { number: "11:119", arabic: "Placeholder", lao: "Placeholder", english: "Except whom your Lord has given mercy, and for that He created them. But the word of your Lord is to be fulfilled that, 'I will surely fill Hell with jinn and men all together.'" },
    { number: "11:120", arabic: "Placeholder", lao: "Placeholder", english: "And each [story] We relate to you from the news of the messengers is that by which We make firm your heart. And there has come to you in this the truth and an instruction and a reminder for the believers." },
    { number: "11:121", arabic: "Placeholder", lao: "Placeholder", english: "And say to those who do not believe, 'Work according to your position; indeed, we are working." },
    { number: "11:122", arabic: "Placeholder", lao: "Placeholder", english: "And wait, indeed, we are waiting.'" },
    { number: "11:123", arabic: "Placeholder", lao: "Placeholder", english: "And to Allah belong the unseen [aspects] of the heavens and the earth, and to Him will be returned the matter, all of it, so worship Him and rely upon Him. And your Lord is not unaware of what you do." }
];

// NOTE: Omitting full verse list for brevity

export default function SurahHudView({ goBack }: SurahHudViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVerses = verses.filter(verse =>
    verse.number.includes(searchQuery) ||
    verse.lao.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
    verse.arabic.includes(searchQuery)
  );

  return (
    <div className="flex flex-col h-screen">
       <header className="flex items-center p-4 sticky top-0 bg-background z-10 border-b">
        <Button variant="ghost" size="icon" onClick={goBack} className="mr-2 shrink-0">
          <ArrowLeft className="w-6 h-6 text-foreground" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search Ayah in Surah Hud..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </header>
      <main className="flex-grow overflow-y-auto p-4">
        {filteredVerses.length > 0 ? (
          filteredVerses.map(v => <VerseCard key={v.number} {...v} />)
        ) : (
          <p className="text-center text-muted-foreground">No Ayah found.</p>
        )}
        <SummaryCard title="Summary">
          This Surah focuses on the stories of various prophets, including Noah, Hud, Salih, Lot, Shu'ayb, and Moses, to emphasize the consequences of rejecting Allah's message. It stresses the importance of steadfastness and patience in the face of adversity and disbelief.
        </SummaryCard>
      </main>
    </div>
  );
}
