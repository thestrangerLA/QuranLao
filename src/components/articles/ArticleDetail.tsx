'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Article {
  id: number;
  title: string;
  category: string;
  content: string;
}

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  return (
    <div className="space-y-8 pb-20">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 border-b border-border">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors text-emerald-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="font-bold text-foreground text-lg truncate">{article.title}</h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookOpen className="w-24 h-24 rotate-12" />
          </div>
          <div className="relative z-10 space-y-4">
            <Badge className="bg-white/20 hover:bg-white/30 text-white border-none px-3 py-1">
              {article.category}
            </Badge>
            <h1 className="text-2xl font-bold leading-tight">{article.title}</h1>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
          <div className="prose prose-emerald dark:prose-invert max-w-none">
            <p className="text-foreground leading-[1.8] text-base whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
