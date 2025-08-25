'use client';
import React, { useState } from 'react';
import VerseCard from '@/components/shared/VerseCard';
import SummaryCard from '@/components/shared/SummaryCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface SurahYunusViewProps {
  goBack: () => void;
}

const verses = [
    { number: "10:1", arabic: "Placeholder", lao: "Placeholder", english: "Alif, Lam, Ra. These are the verses of the wise Book." },
    { number: "10:2", arabic: "Placeholder", lao: "Placeholder", english: "Have the people been astonished that We revealed to a man from among them, 'Warn mankind and give good tidings to those who believe that they will have a [firm] precedence of honor with their Lord'? [But] the disbelievers say, 'Indeed, this is an obvious magician.'" },
    { number: "10:3", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne, arranging the matter [of His creation]. There is no intercessor except after His permission. That is Allah, your Lord, so worship Him. Then will you not remember?" },
    { number: "10:4", arabic: "Placeholder", lao: "Placeholder", english: "To Him is your return all together. [It is] the promise of Allah [which is] truth. Indeed, He begins the [process of] creation and then repeats it that He may reward those who have believed and done righteous deeds, in justice. But those who disbelieved will have a drink of scalding water and a painful punishment for what they used to deny." },
    { number: "10:5", arabic: "Placeholder", lao: "Placeholder", english: "It is He who made the sun a shining light and the moon a derived light and determined for it phases - that you may know the number of years and account [of time]. Allah has not created this except in truth. He details the signs for a people who know." },
    { number: "10:6", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, in the alternation of the night and the day and [in] what Allah has created in the heavens and the earth are signs for a people who fear Him." },
    { number: "10:7", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, those who do not expect the meeting with Us and are satisfied with the life of this world and feel secure therein and those who are heedless of Our signs" },
    { number: "10:8", arabic: "Placeholder", lao: "Placeholder", english: "For those their refuge will be the Fire because of what they used to earn." },
    { number: "10:9", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, those who have believed and done righteous deeds - their Lord will guide them because of their faith. Beneath them rivers will flow in the Gardens of Pleasure." },
    { number: "10:10", arabic: "Placeholder", lao: "Placeholder", english: "Their call therein will be, 'Exalted are You, O Allah ,' and their greeting therein will be, 'Peace.' And the last of their call will be, 'Praise to Allah, Lord of the worlds!'" },
    { number: "10:11", arabic: "Placeholder", lao: "Placeholder", english: "And if Allah was to hasten for the people the evil [they invoke] as He hastens for them the good, their term would have been ended for them. But We leave those who do not expect the meeting with Us, in their transgression, wandering blindly." },
    { number: "10:12", arabic: "Placeholder", lao: "Placeholder", english: "And when adversity touches man, he calls upon Us; whether lying on his side or sitting or standing. But when We remove from him his adversity, he continues [in arrogance] as if he had never called upon Us to [remove] an adversity that touched him. Thus is made pleasing to the transgressors that which they have been doing." },
    { number: "10:13", arabic: "Placeholder", lao: "Placeholder", english: "And We had already destroyed generations before you when they wronged, and their messengers had come to them with clear proofs, but they were not to believe. Thus do We recompense the criminal people." },
    { number: "10:14", arabic: "Placeholder", lao: "Placeholder", english: "Then We made you successors in the land after them so that We may observe how you will do." },
    { number: "10:15", arabic: "Placeholder", lao: "Placeholder", english: "And when Our verses are recited to them as clear evidences, those who do not expect the meeting with Us say, 'Bring us a Qur'an other than this or change it.' Say, [O Muhammad], 'It is not for me to change it on my own accord. I only follow what is revealed to me. Indeed I fear, if I should disobey my Lord, the punishment of a tremendous Day.'" },
    { number: "10:16", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'If Allah had willed, I would not have recited it to you, nor would He have made it known to you, for I had remained among you a lifetime before it. Then will you not reason?'" },
    { number: "10:17", arabic: "Placeholder", lao: "Placeholder", english: "So who is more unjust than he who invents a lie about Allah or denies His verses? Indeed, the criminals will not succeed." },
    { number: "10:18", arabic: "Placeholder", lao: "Placeholder", english: "And they worship other than Allah that which does not harm them or benefit them, and they say, 'These are our intercessors with Allah.' Say, 'Do you inform Allah of something He does not know in the heavens or on the earth?' Exalted is He and high above what they associate with Him." },
    { number: "10:19", arabic: "Placeholder", lao: "Placeholder", english: "And mankind was not but one community [united in religion], but then they differed. And if not for a word that preceded from your Lord, it would have been judged between them concerning that over which they differ." },
    { number: "10:20", arabic: "Placeholder", lao: "Placeholder", english: "And they say, 'Why is a sign not sent down to him from his Lord?' So say, 'The unseen is only for Allah [to know], so wait; indeed, I am with you among those who wait.'" },
    { number: "10:21", arabic: "Placeholder", lao: "Placeholder", english: "And when We let the people taste mercy after hardship has touched them, at once they have a plot against Our verses. Say, 'Allah is faster in plot.' Indeed, Our messengers record that which you plot." },
    { number: "10:22", arabic: "Placeholder", lao: "Placeholder", english: "It is He who enables you to travel on land and sea until, when you are in ships and they sail with them by a good wind and they rejoice therein, there comes a storm wind and the waves come upon them from everywhere and they assume that they are surrounded, supplicating Allah, sincere to Him in religion, 'If You should save us from this, we will surely be among the thankful.'" },
    { number: "10:23", arabic: "Placeholder", lao: "Placeholder", english: "But when He saves them, at once they commit injustice upon the earth without right. O mankind, your injustice is only against yourselves, [being merely] the enjoyment of worldly life. Then to Us is your return, and We will inform you of what you used to do." },
    { number: "10:24", arabic: "Placeholder", lao: "Placeholder", english: "The example of worldly life is but like rain which We have sent down from the sky that the plants of the earth absorb - [those] from which men and livestock eat - until, when the earth has taken on its adornment and is beautified and its people suppose that they have capability over it, there comes to it Our command by night or by day, and We make it a harvest, as if it had not flourished yesterday. Thus do We detail the signs for a people who give thought." },
    { number: "10:25", arabic: "Placeholder", lao: "Placeholder", english: "And Allah invites to the Home of Peace and guides whom He wills to a straight path." },
    { number: "10:26", arabic: "Placeholder", lao: "Placeholder", english: "For them who have done good is the best [reward] and extra. No darkness will cover their faces, nor humiliation. Those are the companions of Paradise; they will abide therein eternally." },
    { number: "10:27", arabic: "Placeholder", lao: "Placeholder", english: "And they who have earned evil deeds, the recompense of an evil deed is the like thereof, and humiliation will cover them. They will have from Allah no protector. It will be as if their faces are covered with pieces of the night - so dark [are they]. Those are the companions of the Fire; they will abide therein eternally." },
    { number: "10:28", arabic: "Placeholder", lao: "Placeholder", english: "And [mention] the Day when We will gather them all together. Then We will say to those who associated others with Allah, '[Remain in] your place, you and your 'partners.'' Then We will separate them, and their 'partners' will say, 'You did not used to worship us,'" },
    { number: "10:29", arabic: "Placeholder", lao: "Placeholder", english: "And sufficient is Allah as a witness between us and you that we were of your worship unaware.'" },
    { number: "10:30", arabic: "Placeholder", lao: "Placeholder", english: "There, every soul will be tested for what it did previously, and they will be returned to Allah, their master, the Truth, and lost from them is that which they used to invent." },
    { number: "10:31", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Who provides for you from the heaven and the earth? Or who controls hearing and sight and who brings the living out of the dead and brings the dead out of the living and who arranges [every] matter?' They will say, 'Allah.' So say, 'Then will you not fear Him?'" },
    { number: "10:32", arabic: "Placeholder", lao: "Placeholder", english: "For that is Allah, your Lord, the Truth. And what is there after truth except error? So how are you turned away?" },
    { number: "10:33", arabic: "Placeholder", lao: "Placeholder", english: "Thus the word of your Lord has come into effect upon those who defiantly disobeyed - that they will not believe." },
    { number: "10:34", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Are there of your 'partners' any who begins creation and then repeats it?' Say, 'Allah begins creation and then repeats it. So how are you deluded?'" },
    { number: "10:35", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Are there of your 'partners' any who guides to the truth?' Say, 'Allah guides to the truth. So is He who guides to the truth more worthy to be followed or he who guides not unless he is guided? Then what is [the matter] with you? How do you judge?'" },
    { number: "10:36", arabic: "Placeholder", lao: "Placeholder", english: "And most of them follow not except assumption. Indeed, assumption does not avail against the truth at all. Indeed, Allah is Knowing of what they do." },
    { number: "10:37", arabic: "Placeholder", lao: "Placeholder", english: "And it was not [possible] for this Qur'an to be produced by other than Allah, but [it is] a confirmation of what was before it and a detailed explanation of the [former] Scripture, about which there is no doubt, from the Lord of the worlds." },
    { number: "10:38", arabic: "Placeholder", lao: "Placeholder", english: "Or do they say, 'He invented it'? Say, 'Then bring a surah like it and call upon whoever you can besides Allah, if you should be truthful.'" },
    { number: "10:39", arabic: "Placeholder", lao: "Placeholder", english: "Rather, they have denied that which they encompass not in knowledge and whose interpretation has not yet come to them. Thus did those before them deny. Then observe how was the end of the wrongdoers." },
    { number: "10:40", arabic: "Placeholder", lao: "Placeholder", english: "And of them are those who believe in it, and of them are those who do not believe in it. And your Lord is most knowing of the corrupters." },
    { number: "10:41", arabic: "Placeholder", lao: "Placeholder", english: "And if they deny you, then say, 'For me are my deeds, and for you are your deeds. You are disassociated from what I do, and I am disassociated from what you do.'" },
    { number: "10:42", arabic: "Placeholder", lao: "Placeholder", english: "And among them are those who listen to you. But can you cause the deaf to hear, although they will not use reason?" },
    { number: "10:43", arabic: "Placeholder", lao: "Placeholder", english: "And among them are those who look at you. But can you guide the blind, although they will not see?" },
    { number: "10:44", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, Allah does not wrong the people at all, but it is the people who are wronging themselves." },
    { number: "10:45", arabic: "Placeholder", lao: "Placeholder", english: "And on the Day when He will gather them, [it will be] as if they had not remained [in the world] but an hour of the day, [and] they will recognize one another. Those will have lost who denied the meeting with Allah and were not guided." },
    { number: "10:46", arabic: "Placeholder", lao: "Placeholder", english: "And whether We show you some of what We promise them or We take you in death, to Us is their return; then, [either way], Allah is a witness concerning what they do." },
    { number: "10:47", arabic: "Placeholder", lao: "Placeholder", english: "And for every nation is a messenger. So when their messenger comes, it will be judged between them in justice, and they will not be wronged." },
    { number: "10:48", arabic: "Placeholder", lao: "Placeholder", english: "And they say, 'When is this promise, if you should be truthful?'" },
    { number: "10:49", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'I possess not for myself any harm or any benefit except what Allah should will. For every nation is a [specified] term. When their time has come, they will not remain behind an hour, nor will they precede [it].'" },
    { number: "10:50", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Have you considered: if His punishment should come to you by night or by day, what portion of it would the criminals be impatient for?'" },
    { number: "10:51", arabic: "Placeholder", lao: "Placeholder", english: "Then is it when it has [actually] occurred that you will believe in it? Now? And you were before asking for it to be hastened?" },
    { number: "10:52", arabic: "Placeholder", lao: "Placeholder", english: "Then it will be said to those who had wronged, 'Taste the punishment of eternity; are you recompensed except for what you used to earn?'" },
    { number: "10:53", arabic: "Placeholder", lao: "Placeholder", english: "And they ask information of you, [O Muhammad], 'Is it true?' Say, 'Yes, by my Lord. Indeed, it is truth; and you will not cause failure [to Allah].'" },
    { number: "10:54", arabic: "Placeholder", lao: "Placeholder", english: "And if every soul that had wronged had all that is in the earth, it would offer it in ransom. And they will conceal regret when they see the punishment; and it will be judged between them in justice, and they will not be wronged." },
    { number: "10:55", arabic: "Placeholder", lao: "Placeholder", english: "Unquestionably, to Allah belongs whatever is in the heavens and the earth. Unquestionably, the promise of Allah is truth, but most of them do not know." },
    { number: "10:56", arabic: "Placeholder", lao: "Placeholder", english: "He gives life and causes death, and to Him you will be returned." },
    { number: "10:57", arabic: "Placeholder", lao: "Placeholder", english: "O mankind, there has to come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers." },
    { number: "10:58", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'In the bounty of Allah and in His mercy - in that let them rejoice; it is better than what they accumulate.'" },
    { number: "10:59", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Have you seen what Allah has sent down to you of provision of which you have made [some] lawful and [some] unlawful?' Say, 'Has Allah permitted you [to do so], or do you invent a lie about Allah?'" },
    { number: "10:60", arabic: "Placeholder", lao: "Placeholder", english: "And what will be the assumption of those who invent a lie about Allah on the Day of Resurrection? Indeed, Allah is full of bounty to the people, but most of them are not grateful." },
    { number: "10:61", arabic: "Placeholder", lao: "Placeholder", english: "And, [O Muhammad], you are not [engaged] in any matter or recite any of the Qur'an and you [people] do not do any deed except that We are witness over you when you are involved in it. And not absent from your Lord is any [part] of an atom's weight within the earth or within the heaven or anything smaller than that or greater but that it is in a clear register." },
    { number: "10:62", arabic: "Placeholder", lao: "Placeholder", english: "Unquestionably, [for] the allies of Allah there will be no fear concerning them, nor will they grieve." },
    { number: "10:63", arabic: "Placeholder", lao: "Placeholder", english: "Those who believed and were fearing Allah." },
    { number: "10:64", arabic: "Placeholder", lao: "Placeholder", english: "For them are good tidings in the worldly life and in the Hereafter. No change is there in the words of Allah. That is what is the great attainment." },
    { number: "10:65", arabic: "Placeholder", lao: "Placeholder", english: "And let not their speech grieve you. Indeed, all honor belongs to Allah entirely. He is the Hearing, the Knowing." },
    { number: "10:66", arabic: "Placeholder", lao: "Placeholder", english: "Unquestionably, to Allah belongs whoever is in the heavens and whoever is on the earth. And those who invoke other than Allah do not [actually] follow [His] 'partners.' They follow not except assumption, and they are not but falsifying." },
    { number: "10:67", arabic: "Placeholder", lao: "Placeholder", english: "It is He who made for you the night to rest in and the day giving sight. Indeed in that are signs for a people who listen." },
    { number: "10:68", arabic: "Placeholder", lao: "Placeholder", english: "They have said, 'Allah has taken a son.' Exalted is He; He is the [one] Free of need. To Him belongs whatever is in the heavens and whatever is in the earth. You have no authority for this. Do you say about Allah that which you do not know?" },
    { number: "10:69", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Indeed, those who invent a lie about Allah will not succeed.'" },
    { number: "10:70", arabic: "Placeholder", lao: "Placeholder", english: "[It is but] a brief enjoyment in this world; then to Us is their return; then We will make them taste the severe punishment for what they used to disbelieve." },
    { number: "10:71", arabic: "Placeholder", lao: "Placeholder", english: "And recite to them the news of Noah, when he said to his people, 'O my people, if my residence and my reminding of the signs of Allah has become burdensome upon you - then I have relied upon Allah. So resolve upon your plan and [call upon] your associates. Then let not your plan be obscure to you. Then carry it out upon me and do not give me respite." },
    { number: "10:72", arabic: "Placeholder", lao: "Placeholder", english: "And if you turn away - then I have not asked of you any payment. My payment is only from Allah, and I have been commanded to be of the Muslims.'" },
    { number: "10:73", arabic: "Placeholder", lao: "Placeholder", english: "And they denied him, so We saved him and those with him in the ship and made them successors, and We drowned those who denied Our signs. Then see how was the end of those who were warned." },
    { number: "10:74", arabic: "Placeholder", lao: "Placeholder", english: "Then We sent after him messengers to their peoples, and they came to them with clear proofs. But they were not to believe in that which they had denied before. Thus We seal over the hearts of the transgressors." },
    { number: "10:75", arabic: "Placeholder", lao: "Placeholder", english: "Then We sent after them Moses and Aaron to Pharaoh and his establishment with Our signs, but they were arrogant and were a criminal people." },
    { number: "10:76", arabic: "Placeholder", lao: "Placeholder", english: "So when the truth came to them from Us, they said, 'Indeed, this is obvious magic.'" },
    { number: "10:77", arabic: "Placeholder", lao: "Placeholder", english: "Moses said, 'Do you say [this] about the truth when it has come to you? Is this magic? But magicians will not succeed.'" },
    { number: "10:78", arabic: "Placeholder", lao: "Placeholder", english: "They said, 'Have you come to us to turn us away from that upon which we found our fathers and so that you two may have grandeur in the land? And we are not believers in you.'" },
    { number: "10:79", arabic: "Placeholder", lao: "Placeholder", english: "And Pharaoh said, 'Bring to me every learned magician.'" },
    { number: "10:80", arabic: "Placeholder", lao: "Placeholder", english: "So when the magicians came, Moses said to them, 'Throw down whatever you will throw.'" },
    { number: "10:81", arabic: "Placeholder", lao: "Placeholder", english: "And when they had thrown, Moses said, 'What you have brought is magic. Indeed, Allah will expose its falsity. Indeed, Allah does not amend the work of corrupters." },
    { number: "10:82", arabic: "Placeholder", lao: "Placeholder", english: "And Allah establishes the truth by His words, even if the criminals dislike it.'" },
    { number: "10:83", arabic: "Placeholder", lao: "Placeholder", english: "But no one believed Moses, except [some] youths among his people, for fear of Pharaoh and his establishment that they would persecute them. And indeed, Pharaoh was a tyrant upon the land, and indeed, he was of the transgressors." },
    { number: "10:84", arabic: "Placeholder", lao: "Placeholder", english: "And Moses said, 'O my people, if you have believed in Allah, then rely upon Him, if you should be Muslims.'" },
    { number: "10:85", arabic: "Placeholder", lao: "Placeholder", english: "So they said, 'Upon Allah do we rely. Our Lord, make us not a trial for the wrongdoing people" },
    { number: "10:86", arabic: "Placeholder", lao: "Placeholder", english: "And save us by Your mercy from the disbelieving people.'" },
    { number: "10:87", arabic: "Placeholder", lao: "Placeholder", english: "And We inspired to Moses and his brother, 'Settle your people in Egypt in houses and make your houses [facing the] qiblah and establish prayer and give good tidings to the believers.'" },
    { number: "10:88", arabic: "Placeholder", lao: "Placeholder", english: "And Moses said, 'Our Lord, indeed You have given Pharaoh and his establishment splendor and wealth in the worldly life, our Lord, that they may lead [men] astray from Your way. Our Lord, obliterate their wealth and harden their hearts so that they will not believe until they see the painful punishment.'" },
    { number: "10:89", arabic: "Placeholder", lao: "Placeholder", english: "[Allah] said, 'Your supplication has been answered.' So remain on a right course and do not follow the way of those who do not know." },
    { number: "10:90", arabic: "Placeholder", lao: "Placeholder", english: "And We took the Children of Israel across the sea, and Pharaoh and his soldiers pursued them in tyranny and enmity until, when drowning overtook him, he said, 'I believe that there is no deity except that in whom the Children of Israel believe, and I am of the Muslims.'" },
    { number: "10:91", arabic: "Placeholder", lao: "Placeholder", english: "Now? And you had disobeyed before and were of the corrupters?" },
    { number: "10:92", arabic: "Placeholder", lao: "Placeholder", english: "So today We will save you in body that you may be to those who succeed you a sign. And indeed, many among the people, of Our signs, are heedless." },
    { number: "10:93", arabic: "Placeholder", lao: "Placeholder", english: "And We have certainly settled the Children of Israel in an agreeable settlement and provided them with good things. And they did not differ until knowledge had come to them. Indeed, your Lord will judge between them on the Day of Resurrection concerning that over which they used to differ." },
    { number: "10:94", arabic: "Placeholder", lao: "Placeholder", english: "So if you are in doubt, [O Muhammad], about that which We have revealed to you, then ask those who have been reading the Scripture before you. The truth has certainly come to you from your Lord, so never be among the doubters." },
    { number: "10:95", arabic: "Placeholder", lao: "Placeholder", english: "And never be of those who deny the signs of Allah and [thus] be among the losers." },
    { number: "10:96", arabic: "Placeholder", lao: "Placeholder", english: "Indeed, those upon whom the word of your Lord has come into effect will not believe," },
    { number: "10:97", arabic: "Placeholder", lao: "Placeholder", english: "Even if every sign should come to them, until they see the painful punishment." },
    { number: "10:98", arabic: "Placeholder", lao: "Placeholder", english: "Then has there not been a single city that believed so its faith benefited it except the people of Jonah? When they believed, We removed from them the punishment of disgrace in worldly life and gave them enjoyment for a time." },
    { number: "10:99", arabic: "Placeholder", lao: "Placeholder", english: "And had your Lord willed, those on earth would have believed - all of them entirely. Then, [O Muhammad], would you compel the people in order that they become believers?" },
    { number: "10:100", arabic: "Placeholder", lao: "Placeholder", english: "And it is not for a soul to believe except by permission of Allah, and He will place defilement upon those who will not use reason." },
    { number: "10:101", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'Observe what is in the heavens and the earth.' But of no avail will be signs or warners to a people who do not believe." },
    { number: "10:102", arabic: "Placeholder", lao: "Placeholder", english: "So do they wait except for like [what occurred in] the days of those who passed on before them? Say, 'Then wait; indeed, I am with you among those who wait.'" },
    { number: "10:103", arabic: "Placeholder", lao: "Placeholder", english: "Then We will save our messengers and those who have believed. Thus, it is an obligation upon Us that We save the believers." },
    { number: "10:104", arabic: "Placeholder", lao: "Placeholder", english: "Say, [O Muhammad], 'O people, if you are in doubt as to my religion - then I do not worship those which you worship besides Allah; but I worship Allah, who takes your souls. And I have been commanded to be of the believers.'" },
    { number: "10:105", arabic: "Placeholder", lao: "Placeholder", english: "And [commanded], 'Direct your face toward the religion, inclining to truth, and never be of those who associate others with Allah;" },
    { number: "10:106", arabic: "Placeholder", lao: "Placeholder", english: "And do not invoke besides Allah that which neither benefits you nor harms you, for if you did, then indeed you would be of the wrongdoers.'" },
    { number: "10:107", arabic: "Placeholder", lao: "Placeholder", english: "And if Allah should touch you with adversity, there is no remover of it except Him; and if He intends for you good, then there is no repeller of His bounty. He causes it to reach whom He wills of His servants. And He is the Forgiving, the Merciful." },
    { number: "10:108", arabic: "Placeholder", lao: "Placeholder", english: "Say, 'O mankind, the truth has come to you from your Lord, so whoever is guided is only guided for [the benefit of] his soul, and whoever goes astray only goes astray [in violation] against it. And I am not over you a manager.'" },
    { number: "10:109", arabic: "Placeholder", lao: "Placeholder", english: "And follow what is revealed to you, [O Muhammad], and be patient until Allah will judge. And He is the best of judges." }
];


// NOTE: Omitting full verse list for brevity

export default function SurahYunusView({ goBack }: SurahYunusViewProps) {
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
            placeholder="Search Ayah in Surah Yunus..."
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
          This Surah focuses on the theme of Tawhid (the oneness of Allah), challenging polytheism and emphasizing the truth of the Quran and the prophethood of Muhammad. It contains stories of Prophet Noah, Prophet Moses, and Prophet Jonah (Yunus) as examples for mankind.
        </SummaryCard>
      </main>
    </div>
  );
}
