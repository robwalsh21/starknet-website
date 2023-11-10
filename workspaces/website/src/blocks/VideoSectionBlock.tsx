import { Box } from "@chakra-ui/react";
import { CategoryTabs } from "@ui/CategoryTabs/CategoryTabs";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { Chapter, playlist } from "@ui/VideoPlayer/constants";
import { VideoPlayerWebsite } from "@ui/VideoPlayer/player-website/VideoPlayerWebsite";
import { useState } from "react";

export default function VideoSectionBlock() {
  const [currentChapter, setCurrentChapter] = useState<Chapter>(playlist[0]);
  const [currentTab, setCurrentTab] = useState<Chapter>(playlist[0]);

  return (
    <Box>
      <Heading
        color="heading-navy-fg"
        variant="h2"
        fontSize={"32px"}
        marginBottom={"24px"}
      >
        {currentChapter.title}
      </Heading>
      <VideoPlayerWebsite
        chapters={playlist}
        initialActiveChapter={playlist[0].id}
        onChapterChange={(id) => setCurrentChapter(playlist.find((p) => p.id === id) ?? playlist[0])}
        playlistOnBottom
      />
      <Box mt="md">
        <CategoryTabs
          activeItemId={currentTab.id}
          onTabClick={(id) => setCurrentTab(playlist.find((p) => p.id === id) ?? playlist[0])}
          items={playlist.map((p) => ({
            id: p.id,
            label: p.subtitle,
          }))}
        />
        <Box
          maxW="656px"
          marginInline="auto"
          sx={{
            "> p": {
              pt: "xs",
              pb: "md",
            },
            "> h3": {
              pt: "2xl",
              pb: "sm",
              margin: 0,
              fontSize: "20px",
              fontWeight: 700,
            },
          }}
        >
          <Heading
            color="heading-navy-fg"
            margin="24px 0 !important"
            variant="h3"
          >
            {currentTab.title}
          </Heading>
          { currentTab?.content?.map?.((paragraph) => (
            <Text
              as="p"
              marginTop={'1rem'}
              marginBottom={'2rem'}
            >
              {paragraph}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
