import { registerGenerateJsconfigAliases } from './commands/generateJsconfigAliases'
import { registerFindReferences } from './findReferences'
import { registerGotoDefinition } from './gotoDefinition'
import { registerHover } from './hover'
// import { registerLinksProvider } from './links'
import { registerTemplateCompletion } from './templateCompletion'

export const activate = () => {
    registerFindReferences()
    registerTemplateCompletion()
    registerGotoDefinition()
    registerHover()
    registerGenerateJsconfigAliases()
    // registerLinksProvider()
}
