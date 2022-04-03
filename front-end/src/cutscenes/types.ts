export type TDialogue = {
  character: string,
  dialogue: string,
  face: string,
  altFaceText: string,
}

export type TBackground = {
  image: string,
  altText: string,
}

export type TCutsceneData = {
  dialogue: TDialogue[],
  background: TBackground,
  sceneEndPath: string
}

export type TUseCutsceneProps = {
  cutsceneData: TCutsceneData
}
