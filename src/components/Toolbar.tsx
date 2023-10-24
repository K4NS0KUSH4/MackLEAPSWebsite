"use client"

import { type Editor } from "@tiptap/react"
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    SeparatorHorizontal,
    Image,
    Link
} from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

type Props = {
    editor: Editor | null;
}

export default function Toolbar({ editor }: Props) {
    if (!editor) {
        return null;
    }
    return <div className="flex gap-[.4em] border border-input bg-transparent rounded-md mb-[.7em] p-[.3em]">
        <Toggle 
        aria-label="Toggle Heading 2"
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
            <Heading2 className="h-4 w-4" />
        </Toggle>

        <Toggle 
        aria-label="Toggle Bold"
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
            <Bold className="h-4 w-4" />
        </Toggle>

        <Toggle 
        aria-label="Toggle Italic"
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
            <Italic className="h-4 w-4" />
        </Toggle>

        <Toggle 
        aria-label="Toggle Strike"
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
            <Strikethrough className="h-4 w-4" />
        </Toggle>

        <Toggle 
        aria-label="Toggle bullet List"
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
            <List className="h-4 w-4" />
        </Toggle>

        <Toggle 
        aria-label="Toggle Ordered List"
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
            <ListOrdered className="h-4 w-4" />
        </Toggle>

        <Toggle 
        aria-label="Set Horizontal Rule"
        size="sm"
        pressed={editor.isActive("horizontalRule")}
        onPressedChange={() => editor.chain().focus().setHorizontalRule().run()}
        >
            <SeparatorHorizontal className="h-4 w-4" />
        </Toggle>
    </div>
}