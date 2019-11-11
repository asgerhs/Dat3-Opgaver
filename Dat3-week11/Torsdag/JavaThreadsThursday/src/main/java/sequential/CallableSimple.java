package sequential;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CallableSimple {
   private static ExecutorService executor = Executors.newCachedThreadPool();
   private static List<Future<String>> futureList = new ArrayList();
   public static void main(String[] args) throws InterruptedException, ExecutionException {
       for(int i = 0; i < 100; i++) {
           Future<String> future = executor.submit(new Callable<String>() {
               @Override
               public String call() throws Exception {
                   return Thread.currentThread().getName();
               }
           });
           //Dont do this
           //String result = future.get();
           //System.out.println(result);
           //Do this
           futureList.add(future);
       }
       for(Future f : futureList) {
           System.out.println(f.get());
       }
       System.out.println("Finished");
   }
}