import tensorflow as tf

hello = tf.constant("Hello, TensorFlow!")

# Computational Graph
## Build tensors
node1 = tf.constant(3.0, tf.float32)
node2 = tf.constant(4.0, tf.float32)
node3 = tf.add(node1, node2)

## Feed data and run graph
sess = tf.compat.v1.Session()
print(sess.run([node1, node2]))
print(sess.run(node3))

## Placeholder
a = tf.compat.v1.placeholder(tf.float32)
b = tf.compat.v1.placeholder(tf.float32)
adder_node = a + b

print(sess.run(adder_node, feed_dict={a: 3, b: 4.5}))
print(sess.run(adder_node, feed_dict={a: [1, 3], b: [2, 4]}))
