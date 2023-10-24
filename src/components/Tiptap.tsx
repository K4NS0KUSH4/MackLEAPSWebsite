'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import { Heading } from "@tiptap/extension-heading"
import { BulletList } from '@tiptap/extension-bullet-list'
import { OrderedList } from '@tiptap/extension-ordered-list'
import { ListItem } from '@tiptap/extension-list-item'
import { Link } from "@tiptap/extension-link"
import { HorizontalRule } from '@tiptap/extension-horizontal-rule'

import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'

export default function Tiptap({
		description,
		onChange
} : {
		description: string,
		onChange: (richText: string) => void
}) {
		const editor = useEditor({
				extensions: [
					StarterKit.configure({}),
					Heading.configure({
						HTMLAttributes: {
							class: "text-xl font-bold",
							levels: [2]
						}
					}),
					BulletList.configure({
						keepMarks: true,
						keepAttributes: false,
					}),
					OrderedList.configure({
						keepMarks: true,
						keepAttributes: false,
					}),
					ListItem.configure({}),
					HorizontalRule.configure({}),
				],
				content: description,
				editorProps: {
					attributes: {
						class: "min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					}
				},
				onUpdate({ editor }) {
					onChange(editor.getHTML());
					console.log(editor.getHTML());
				}
		})

		return (
				<div>
					<Toolbar editor={editor} />
					<EditorContent editor={editor} />
				</div>
		)
}

