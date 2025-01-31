import { ref, onBeforeMount } from 'vue';
import { useListAction } from './useListAction';
import { createClient } from 'contentful';

const client = createClient({
    space: 'coj5o40stytg',
    accessToken: 'SXXzLg582rZmI25dTM_iI7TE1BpgjgKTQLR4ftHnnt8'
});

export const useBlogs = () => {
    const blogs = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const { addItem, deleteItem } = useListAction(blogs);

    const getBlogs = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await client.getEntries({
              content_type: "blogPost",
              order: "-fields.publishDate",
            });
            console.log(response, "asdfasdfasdfasdfasdf");
            

            blogs.value = response.items.map((item) => ({
                ...item.fields,
                id: item.fields.slug,
              }));
            } catch (err) {
              error.value = err;
            } finally {
              isLoading.value = false;
            }
          };
        
          onBeforeMount(getBlogs);
        
          return {
            blogs,
            isLoading,
            error,
            addItem,
            deleteItem,
          };
}