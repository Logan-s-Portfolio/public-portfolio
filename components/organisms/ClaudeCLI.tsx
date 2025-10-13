/**
 * ClaudeCLI Organism
 *
 * Terminal-style component showcasing Claude Code development workflow.
 * Demonstrates iterative, test-driven process with realistic dev session.
 * Design System: Terminal aesthetic with terracotta/sage accents
 * Accessibility: Semantic HTML, ARIA labels, keyboard navigation
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Text } from "@/components/atoms/Text";

interface Message {
  type: "user" | "claude" | "system" | "error" | "success";
  content: string;
  timestamp?: string;
}

export interface ClaudeCLIProps {
  /** Initial messages to display */
  messages?: Message[];
  /** Show typing indicator */
  showTyping?: boolean;
  /** Additional wrapper class */
  className?: string;
}

export const ClaudeCLI = ({
  messages: initialMessages = [],
  showTyping = false,
  className,
}: ClaudeCLIProps) => {
  const [messages] = useState<Message[]>(initialMessages);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border-2 border-neutral-300 bg-neutral-900 shadow-xl",
        className
      )}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-neutral-700 bg-neutral-800 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
          <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
        </div>
        <Text variant="small" className="ml-2 font-mono text-neutral-400">
          claude-code-session.sh
        </Text>
      </div>

      {/* Terminal Content */}
      <div className="max-h-[600px] overflow-y-auto p-6 font-mono text-sm">
        <AnimatePresence initial={false}>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="mb-4"
            >
              {message.type === "user" && (
                <div className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-terracotta-400">you@dev</span>
                  <span className="text-neutral-300">{message.content}</span>
                </div>
              )}

              {message.type === "claude" && (
                <div className="flex gap-3">
                  <span className="flex-shrink-0 font-bold text-sage-400">claude</span>
                  <span className="text-neutral-300">{message.content}</span>
                </div>
              )}

              {message.type === "system" && (
                <div className="rounded-md bg-neutral-800 p-3 text-cyan-400">
                  <span className="mr-2">$</span>
                  {message.content}
                </div>
              )}

              {message.type === "error" && (
                <div className="rounded-md border border-red-500/30 bg-red-950/30 p-3 text-red-400">
                  <span className="mr-2 font-bold">ERROR:</span>
                  {message.content}
                </div>
              )}

              {message.type === "success" && (
                <div className="rounded-md border border-green-500/30 bg-green-950/30 p-3 text-green-400">
                  <span className="mr-2 font-bold">✓</span>
                  {message.content}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {showTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <span className="flex-shrink-0 font-bold text-sage-400">claude</span>
            <div className="flex gap-1">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-neutral-500"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="text-neutral-500"
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="text-neutral-500"
              >
                .
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* Cursor */}
        {!showTyping && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block h-4 w-2 bg-terracotta-500"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

ClaudeCLI.displayName = "ClaudeCLI";
