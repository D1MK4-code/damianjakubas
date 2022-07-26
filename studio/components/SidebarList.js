import S from '@sanity/desk-tool/structure-builder';
import StarIcon from '@mui/icons-material/Star';

function SidebarList() {
  return S.list()
    .title('damianjakubas - blog')
    .items([
      S.listItem()
        .title('Featured')
        .id('featuredItems')
        .icon(StarIcon)
        .child(S.editor().schemaType('featured').documentId('featuredItems')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'featured'
      ),
    ]);
}

export default SidebarList;
