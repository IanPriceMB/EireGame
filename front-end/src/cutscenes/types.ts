export type TDialogue = {
  character: string,
  dialogue: string,
  face: string,
  altFaceText: string,
}

export type TCutsceneData = {
  dialogue: TDialogue[],
}

export type TUseCutsceneProps = {
  cutsceneData: TCutsceneData
}
