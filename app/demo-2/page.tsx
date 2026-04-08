import { Demo2Header } from "@/components/demo2/Demo2Header";
import { Demo2Hero } from "@/components/demo2/Demo2Hero";
import { Demo2About } from "@/components/demo2/Demo2About";
import { Demo2Categories } from "@/components/demo2/Demo2Categories";
import { Demo2Applications } from "@/components/demo2/Demo2Applications";
import { Demo2ProductDetail } from "@/components/demo2/Demo2ProductDetail";
import { Demo2Certificates } from "@/components/demo2/Demo2Certificates";
import { Demo2BlogTeaser } from "@/components/demo2/Demo2BlogTeaser";
import { Demo2Footer } from "@/components/demo2/Demo2Footer";

export default function Demo2Page() {
  return (
    <>
      <Demo2Header />
      <main>
        <Demo2Hero />
        <Demo2About />
        <Demo2Categories />
        <Demo2Applications />
        <Demo2ProductDetail />
        <Demo2Certificates />
        <Demo2BlogTeaser />
      </main>
      <Demo2Footer />
    </>
  );
}
