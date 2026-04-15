import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
title: "Build Podcasts & Video Creation | Voxtent",
description: "Build podcasts, videos & content that drive growth.",
};

export default function Page() {
return <HomeClient />;
}
